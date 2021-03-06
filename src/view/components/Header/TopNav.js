import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { font } from "../../../styled/Font";
import { useSelector } from "react-redux";
import { media } from "../../../styled/Responsive";
import { PropTypes } from "prop-types";

function TopNav() {
  const { totalCartNum } = useSelector(state => state.cart);

  return (
    <Container>
      <Contents>
        <Cart>
          <Link to="/cart">
            <Num>{totalCartNum}</Num>
            <span>장바구니</span>
          </Link>
        </Cart>
      </Contents>
    </Container>
  );
}

TopNav.propTypes = {
  totalCartNum: PropTypes.number
};

const Container = styled.div`
  background: #f5f5f5;
  height: 48px;
  display: flex;
  align-items: center;

  ${media.lessThan("sm")`
    order: 2;
    width: 100px;
    background:0;
  `};
`;

const Contents = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  width: 93%;
  display: flex;
  justify-content: flex-end;
`;

const Cart = styled.div`
  margin-top: -5px;

  a {
    text-decoration: none;
    font-weight: 500;
    color: #777;
    display: flex;
    align-items: center;
  }
`;

const Num = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background: #ff3f42;
  color: #fff;
  line-height: 18px;
  text-align: center;
  font-family: ${font.en};
  font-weight: 400;
  font-size: 13px;
  margin-right: 5px;
  margin-top: 2px;
`;

export default TopNav;
