import React from "react";
import styled from "styled-components";
import CartContainer from "./../containers/CartContainer";

function Cart() {
  return (
    <Container>
      <CartContainer />
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 300px;
`;

export default Cart;
