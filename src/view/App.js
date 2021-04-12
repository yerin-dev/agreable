import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../styled/Reset";
import Routes from "./routes/Routes";
import Header from "./components/Header";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Routes />
    </Container>
  );
}

const Container = styled.div``;

export default App;
