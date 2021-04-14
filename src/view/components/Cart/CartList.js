import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { media } from "../../../styled/Responsive";
import { PropTypes } from "prop-types";

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

CartList.propTypes = {
  data: PropTypes.array
};

const Container = styled.div`
  width: calc(100% - 524px);

  ${media.lessThan("lg")`
    width:calc(100% - 424px);
  `};

  ${media.lessThan("md")`
    width:100%;
  `};

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
