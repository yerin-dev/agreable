import React from "react";
import styled from "styled-components";
import { font } from "./../../../../styled/Font";
import PhotoListContainer from "./../../../containers/PhotoListContainer";

function Product() {
  return (
    <Container>
      <Title>윙잇 MADE</Title>
      <PhotoListContainer />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 80px;
`;

const Title = styled.h2`
  font-size: 34px;
  font-family: ${`${font.en},${font.ko}`};
  font-weight: 700;
  text-align: center;
  padding-bottom: 120px;
`;

export default Product;
