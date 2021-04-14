import React from "react";
import styled from "styled-components";
import { font } from "./../../../../styled/Font";
import PhotoListContainer from "./../../../containers/PhotoListContainer";
import { media } from "../../../../styled/Responsive";

function Product({ match }) {
  return (
    <Container>
      <Title>윙잇 MADE</Title>
      <PhotoListContainer match={match} />
    </Container>
  );
}

const Container = styled.div`
  padding-top: 80px;

  ${media.lessThan("sm")`
    padding-top: 40px;
  `};
`;

const Title = styled.h2`
  font-size: 34px;
  font-family: ${`${font.en},${font.ko}`};
  font-weight: 700;
  text-align: center;
  padding-bottom: 120px;

  ${media.lessThan("sm")`
    padding-bottom: 75px;
  `};
`;

export default Product;
