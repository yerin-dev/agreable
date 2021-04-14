import React from "react";
import styled from "styled-components";
import CartList from "./CartList";
import CartPayment from "./CartPayment";

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

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 80px;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 34px;
  font-weight: 700;
`;

const Contents = styled.div`
  display: flex;
  margin-top: 50px;
`;

export default CartComponent;
