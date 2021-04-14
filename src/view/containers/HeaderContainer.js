import React from "react";
import Header from "../components/Header/index";
import { appActions } from "../../redux/ActionCreators";
import { reduceTotalCount } from "../../lib/Common";
import { getCartStorage } from "../../lib/Cart";
import { PropTypes } from "prop-types";

function HeaderContainer() {
  const data = getCartStorage();

  if (data) {
    appActions.updateState({
      totalCartNum: reduceTotalCount(data)
    });
  }

  return <Header />;
}

HeaderContainer.propTypes = {
  data: PropTypes.array
};

export default HeaderContainer;
