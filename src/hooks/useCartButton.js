import { useState } from "react";
import { useSelector } from "react-redux";
import { minusCartButton, plusCartButton, removeCartItem } from "../lib/Cart";
import { appActions } from "./../redux/ActionCreators";

function useCartButton(initValue) {
  const [count, setCount] = useState(initValue);
  const { totalCartNum } = useSelector(state => state.app);

  const handlePlusButton = e => {
    const id = e.currentTarget.parentNode.dataset.id;
    if (count < 100) {
      plusCartButton(id, count);
      setCount(prev => prev + 1);
      appActions.updateState({ totalCartNum: totalCartNum + 1 });
    }
  };

  const handleMinusButton = e => {
    const id = e.currentTarget.parentNode.dataset.id;

    if (count > 1) {
      minusCartButton(id, count);
      setCount(prev => prev - 1);
      appActions.updateState({ totalCartNum: totalCartNum - 1 });
    }
  };

  const handleRemoveButton = e => {
    const id = e.currentTarget.dataset.id;
    const itemCount = removeCartItem(id);
    appActions.updateState({ totalCartNum: totalCartNum - itemCount });
  };

  return { count, setCount, handlePlusButton, handleMinusButton, handleRemoveButton };
}

export default useCartButton;
