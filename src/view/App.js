import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styled/Reset";
import Routes from "./routes/Routes";
import HeaderContainer from "./containers/HeaderContainer";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <HeaderContainer />
      <Routes />
    </Container>
  );
}

const Container = styled.div``;

export default App;
