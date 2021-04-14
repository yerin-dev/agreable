import React from "react";
import styled from "styled-components";
import CartContainer from "./../containers/CartContainer";
import { media } from "../../styled/Responsive";

function Cart() {
  return (
    <Container>
      <CartContainer />
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 300px;

  ${media.lessThan("sm")`
    padding-bottom: 75px;
  `};
`;

export default Cart;
