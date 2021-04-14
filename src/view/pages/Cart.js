import React from "react";
import styled from "styled-components";
import CartComponent from "../components/Cart";

function Cart() {
  return (
    <Container>
      <CartComponent />
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 300px;
`;

export default Cart;
