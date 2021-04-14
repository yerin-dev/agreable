import React from "react";
import styled from "styled-components";
import { URL } from "../../../constants/Consts";
import { font } from "../../../styled/Font";
import { reduceTotalCount, addCommaPrice } from "./../../../lib/Common";
import { addCart } from "./../../../lib/Cart";
import { appActions } from "../../../redux/ActionCreators";
import { media } from "../../../styled/Responsive";

function PhotoCard({ item }) {
  const handleOnClick = e => {
    const targetId = e.currentTarget.id;
    const [data] = addCart(targetId, item);

    appActions.updateState({
      totalCartNum: reduceTotalCount(data)
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

  ${media.lessThan("sm")`
  border-radius: 10px;
  `};
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.2px;
  padding-top: 18px;
  line-height: 1.3;
  word-break: keep-all;
  word-wrap: break-word;

  ${media.lessThan("lg")`
  font-size: 18px;
  `};
`;

const Price = styled.div`
  font-family: ${`${font.en},${font.ko}`};
  font-weight: 700;
  font-size: 28px;
  margin-top: 15px;
  letter-spacing: -0.2px;

  ${media.lessThan("lg")`
  margin-top: 5px;
  font-size: 24px;
  `};
`;

export default PhotoCard;
