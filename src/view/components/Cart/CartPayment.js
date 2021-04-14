import React from "react";
import styled from "styled-components";
import { font } from "../../../styled/Font";

function CartPayment() {
  return (
    <Container>
      <Payment>
        <p>결제 예정 금액</p>
        <Price>17,700원</Price>
      </Payment>
      <Button>주문하기</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  margin-left: 24px;
  margin-top: 24px;
`;

const Payment = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 0 20px;
  height: 100px;
  justify-content: space-between;

  p {
    font-weight: 400;
    font-size: 22px;
    letter-spacing: -0.4px;
    color: #555;
  }
`;

const Price = styled.div`
  font-family: ${`${font.en}, ${font.ko}`};
  font-weight: 700;
  color: #ff3f42;
  font-size: 36px;
`;

const Button = styled.button`
  border-radius: 4px;
  background: #ff3f42;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  display: block;
  border: 0;
  width: 100%;
  height: 55px;
  margin-top: 35px;
  letter-spacing: -0.2px;
`;

export default CartPayment;
