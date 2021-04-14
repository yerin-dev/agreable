import { useState } from "react";
import { useSelector } from "react-redux";
import { minusCartButton, plusCartButton } from "../lib/Cart";
import { appActions } from "./../redux/ActionCreators";

function useCartButton(initValue) {
  const [count, setCount] = useState(initValue);
  const { totalCartNum } = useSelector(state => state.app);

  const handlePlusButton = e => {
    const current = e.currentTarget;
    const id = current.parentNode.dataset.id;
    if (count < 100) {
      plusCartButton(id, count);
      setCount(prev => prev + 1);
      appActions.updateState({ totalCartNum: totalCartNum + 1 });
    }
  };

  const handleMinusButton = e => {
    const current = e.currentTarget;
    const id = current.parentNode.dataset.id;

    if (count > 1) {
      minusCartButton(id, count);
      setCount(prev => prev - 1);
      appActions.updateState({ totalCartNum: totalCartNum - 1 });
    }
  };

  return { count, handlePlusButton, handleMinusButton };
}

export default useCartButton;
