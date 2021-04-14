import React from "react";
import styled from "styled-components";
import Header from "./../components/Header/index";
import { appActions } from "../../redux/ActionCreators";
import { totalCount, handleLocalStorage } from "../../lib/Common";

function HeaderContainer() {
  const data = handleLocalStorage("parse", "cart");

  appActions.updateState({
    totalCount: totalCount(data, "count")
  });

  return <Header />;
}

const Container = styled.div``;

export default HeaderContainer;
