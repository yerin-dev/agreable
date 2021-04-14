import React, { useState, useEffect } from "react";
import CartComponent from "./../components/Cart/index";
import { useSelector } from "react-redux";
import { getCartStorage } from "./../../lib/Cart";
import { PropTypes } from "prop-types";

function CartContainer() {
  const { totalCartNum, modifyCartCheckBox } = useSelector(state => state.cart);
  const [data, setData] = useState(getCartStorage());

  useEffect(() => {
    setData(getCartStorage());
  }, [totalCartNum, modifyCartCheckBox]);

  return <CartComponent data={data} />;
}

CartContainer.propTypes = {
  data: PropTypes.array
};

export default CartContainer;
