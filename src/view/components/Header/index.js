import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";

function Header() {
  return (
    <Container>
      <TopNav />
      <Contents>
        <h1>
          <Logo to="/">
            <img src="https://image.wingeat.com/logo/images/we_logo_center.png" alt="Wing Eat" />
          </Logo>
        </h1>
      </Contents>
    </Container>
  );
}
const Container = styled.div``;

const Contents = styled.div`
  display: flex;
  height: 128px;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
  background: #fff;
  border-bottom: 1px solid #ddd;
  justify-content: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    width: 150px;
  }
`;

export default Header;
