import React from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartPayment from "./CartPayment";
import { media } from "../../../styled/Responsive";
import { PropTypes } from "prop-types";

function CartComponent({ data }) {
  return (
    <Container>
      <Title>장바구니</Title>
      <Contents>
        <CartList data={data} />
        <CartPayment item={data} />
      </Contents>
    </Container>
  );
}

CartPayment.propTypes = {
  data: PropTypes.object
};

const Container = styled.div`
  max-width: 1500px;
  width: 93%;
  margin: 0 auto;
  padding: 80px 0 0;

  ${media.lessThan("sm")`
  padding: 60px 0 0;
  `};
`;

const Title = styled.h2`
  text-align: center;
  font-size: 34px;
  font-weight: 700;
`;

const Contents = styled.div`
  display: flex;
  margin-top: 50px;

  ${media.lessThan("lg")`
    flex-wrap: wrap;
  `};
`;

export default CartComponent;
