import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import { media } from "../../../styled/Responsive";

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
const Container = styled.div`
  ${media.lessThan("sm")`
    display:flex;
    justify-content: space-between;
    padding: 0 3.5%;
    width:100%;
    box-sizing:border-box;
    height: 128px;
    padding-top:30px;
    border-bottom: 1px solid #ddd;
  `};
`;

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

  ${media.lessThan("sm")`
    order: 1;
    width:130px;
    height: auto;
    align-items: flex-start;
    border-bottom: 0;
  `};
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  img {
    width: 150px;

    ${media.lessThan("sm")`
    width: 100%;
    `};
  }
`;

export default Header;
