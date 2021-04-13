import React from "react";
import styled from "styled-components";
import VisualContainer from "./../containers/VisualContainer";
import Product from "./../components/Home/Product/index";

function Home({ match }) {
  return (
    <Container>
      <VisualContainer />
      <Product match={match} />
    </Container>
  );
}

const Container = styled.div`
  padding-bottom: 300px;
`;

export default Home;
