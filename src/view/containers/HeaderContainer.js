import React, { useEffect } from "react";
import Header from "../components/Header/index";
import { cartActions } from "../../redux/ActionCreators";
import { reduceTotalCount } from "../../lib/Common";
import { getCartStorage } from "../../lib/Cart";
import { PropTypes } from "prop-types";

function HeaderContainer() {
  useEffect(() => {
    const data = getCartStorage();
    if (data) {
      cartActions.updateState({
        totalCartNum: reduceTotalCount(data)
      });
    }
  }, []);

  return <Header />;
}

HeaderContainer.propTypes = {
  data: PropTypes.array
};

export default HeaderContainer;
