import React from "react";
import styled from "styled-components";
import { URL } from "../../../constants/Consts";
import { font } from "../../../styled/Font";
import { addCart, totalCount, addCommaPrice } from "./../../../lib/Common";
import { appActions } from "../../../redux/ActionCreators";

function PhotoCard({ item }) {
  const handleOnClick = e => {
    const [data] = addCart(e, item);

    appActions.updateState({
      totalCount: totalCount(data, "count")
    });
  };

  return (
    <li>
      <Button onClick={handleOnClick} id={item.id}>
        <Image>
          <img src={URL.VISUAL_BASE_URL + item.image} alt="" />
        </Image>
        <Title>{item.itemName}</Title>
        {item.price && <Price>{addCommaPrice(item.price)}원</Price>}
      </Button>
    </li>
  );
}

const Button = styled.button`
  background: 0;
  border: 0;
  padding: 0;
  text-align: inherit;
  outline: 0;
  cursor: pointer;
  width: 100%;
`;

const Image = styled.div`
  border-radius: 15px;
  overflow: hidden;
  height: 0;
  padding-bottom: 100%;
  background: #e5e5e5;

  img {
    width: 100%;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.2px;
  padding-top: 18px;
  line-height: 1.3;
`;

const Price = styled.div`
  font-family: ${`${font.en},${font.ko}`};
  font-weight: 700;
  font-size: 28px;
  margin-top: 15px;
  letter-spacing: -0.2px;
`;

export default PhotoCard;
