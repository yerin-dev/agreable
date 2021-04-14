import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

function CartList({ data }) {
  return (
    <Container>
      <ul>
        {data.map((item, idx) => (
          <CartItem item={item} key={idx} />
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: calc(100% - 524px);

  li {
    padding: 18px 15px;
    box-sizing: border-box;
    border: 1px solid #000000;
    position: relative;

    & + li {
      border-top: 0;
    }
  }
`;

export default CartList;
