import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { font } from "../../../styled/Font";
import { addCommaPrice } from "../../../lib/Common";
import { URL } from "../../../constants/Consts";
import useCartButton from "./../../../hooks/useCartButton";
import { PropTypes } from "prop-types";

function CartItem({ item = {} }) {
  const [itemPrice, setItemPrice] = useState(item?.price);
  const [checkBox, setCheckBox] = useState(item.checked);
  const { count, setCount, handlePlusButton, handleMinusButton, handleRemoveButton, handleCheckBox } = useCartButton(
    item?.count,
    setCheckBox
  );

  useEffect(() => {
    setItemPrice(addCommaPrice(item.price * count));
  }, [count]);

  useEffect(() => {
    setCount(item?.count);
  }, [item]);

  return (
    <li>
      <CloseButton onClick={handleRemoveButton} data-id={item.id}>
        삭제하기
      </CloseButton>
      <ItemTitle>
        <CheckBox data-id={item.id}>
          <input type="checkbox" id={`checkBox${item.id}`} title="장바구니 체크박스" checked={checkBox} onChange={handleCheckBox} />
          <label htmlFor={`checkBox${item.id}`} />
        </CheckBox>
        <Title className="e_">{item.itemName}</Title>
      </ItemTitle>
      <ItemInfo>
        <Image>
          <img src={URL.VISUAL_BASE_URL + item.image} alt={item.itemName} />
        </Image>
        <Info>
          <Price>{addCommaPrice(item.price)}원</Price>
          <Count data-id={item.id}>
            <button className="btn minus" onClick={handleMinusButton}>
              <div className="icon">-</div>
            </button>
            <span>{count}</span>
            <button className="btn plus" onClick={handlePlusButton}>
              <div className="icon">+</div>
            </button>
          </Count>
        </Info>
      </ItemInfo>
      <TotalPrice>합계: {itemPrice}원</TotalPrice>
    </li>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    itemName: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
  })
};

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
  font-size: 0;
  width: 18px;
  height: 18px;
  background: 0;
  border: 0;
  transform: rotate(45deg);
  outline: 0;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 3px;
    height: 100%;
    background: #000;
    margin-left: -1.5px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    height: 3px;
    width: 100%;
    background: #000;
    margin-top: -1.5px;
  }
`;

const ItemTitle = styled.div`
  position: relative;
`;

const CheckBox = styled.div`
  position: absolute;
  top: 2px;
  left: 0;

  input[type*="checkbox"] {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;

    &:checked + label:after {
      content: "";
      display: block;
    }

    & + label {
      display: block;
      width: 22px;
      height: 22px;
      position: relative;
      cursor: pointer;

      &:before {
        position: absolute;
        content: "";
        top: 0;
        width: 22px;
        height: 22px;
        text-align: center;
        border: 1px solid #cecece;
        border-radius: 20px;
        box-sizing: border-box;
      }

      &:after {
        position: absolute;
        content: "";
        top: 6px;
        left: 5px;
        width: 9px;
        height: 4px;
        display: none;
        border-left: 3px solid #000;
        border-bottom: 3px solid #000;
        transform: rotate(-45deg);
      }
    }
  }
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: -0.4px;
  padding-left: 32px;
  padding-right: 35px;
  line-height: 1.5;
`;

const ItemInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Image = styled.div`
  width: 80px;
  height: 80px;
  background: #e5e5e5;

  img {
    object-fit: cover;
  }
`;

const Info = styled.div`
  width: calc(100% - 90px);
  margin-left: 10px;
`;

const Price = styled.div`
  font-family: ${`${font.en}, ${font.ko}`};
  font-weight: 700;
  font-size: 22px;
  margin-bottom: 4px;
`;

const Count = styled.div`
  width: 105px;
  background: #ddd;
  border-radius: 5px;
  height: 38px;
  display: flex;
  overflow: hidden;
  padding: 0 2px;
  box-sizing: border-box;

  .btn {
    border: 0;
    background: 0;
    width: 30px;
    font-weight: 700;
    outline: 0;
    cursor: pointer;
    font-size: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    .icon {
      width: 14px;
      height: 14px;
      position: relative;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 3px;
        height: 100%;
        background: #555;
        margin-left: -1.5px;
      }
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        height: 3px;
        width: 100%;
        background: #555;
        margin-top: -1.5px;
      }
    }

    &.minus .icon:before {
      display: none;
    }
  }
  span {
    width: calc(100% - 60px);
    text-align: center;
    line-height: 38px;
    font-family: ${font.en};
  }
`;

const TotalPrice = styled.div`
  font-family: ${`${font.en}, ${font.ko}`};
  font-weight: 700;
  font-size: 22px;
  text-align: right;
`;

export default CartItem;
