import React from "react";
import Header from "../components/Header/index";
import { appActions } from "../../redux/ActionCreators";
import { reduceTotalCount } from "../../lib/Common";
import { getCartStorage } from "../../lib/Cart";

function HeaderContainer() {
  const data = getCartStorage();

  if (data) {
    appActions.updateState({
      totalCartNum: reduceTotalCount(data)
    });
  }

  return <Header />;
}

export default HeaderContainer;
