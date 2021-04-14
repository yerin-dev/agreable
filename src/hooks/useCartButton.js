import { useState } from "react";
import { useSelector } from "react-redux";
import { timestamp } from "../lib/Common";
import { minusCartButton, plusCartButton, removeCartItem, reversedCartCheckBox } from "../lib/Cart";
import { cartActions } from "./../redux/ActionCreators";

function useCartButton(initValue, setCheckBox) {
  const [count, setCount] = useState(initValue);
  const { totalCartNum } = useSelector(state => state.cart);

  const handlePlusButton = e => {
    const id = e.currentTarget.parentNode.dataset.id;
    if (count < 100) {
      plusCartButton(id, count);
      setCount(prev => prev + 1);
      cartActions.updateState({ totalCartNum: totalCartNum + 1 });
    }
  };

  const handleMinusButton = e => {
    const id = e.currentTarget.parentNode.dataset.id;

    if (count > 1) {
      minusCartButton(id, count);
      setCount(prev => prev - 1);
      cartActions.updateState({ totalCartNum: totalCartNum - 1 });
    }
  };

  const handleRemoveButton = e => {
    const id = e.currentTarget.dataset.id;
    const itemCount = removeCartItem(id);
    cartActions.updateState({ totalCartNum: totalCartNum - itemCount });
  };

  const handleCheckBox = e => {
    const id = e.currentTarget.parentNode.dataset.id;
    reversedCartCheckBox(id);
    setCheckBox(prev => !prev);
    cartActions.updateState({ modifyCartCheckBox: timestamp() });
  };

  return { count, setCount, handlePlusButton, handleMinusButton, handleRemoveButton, handleCheckBox };
}

export default useCartButton;
