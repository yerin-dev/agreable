import React, { useState, useEffect } from "react";
import CartComponent from "./../components/Cart/index";
import { useSelector } from "react-redux";
import { getCartStorage } from "./../../lib/Cart";

function CartContainer() {
  const { totalCartNum } = useSelector(state => state.app);
  const [data, setData] = useState(getCartStorage());

  useEffect(() => {
    setData(getCartStorage());
  }, [totalCartNum]);

  return <CartComponent data={data} />;
}

export default CartContainer;
