import { createActions, createReducer } from "reduxsauce";

const initialState = {
  totalCartNum: 0,
  modifyCartCheckBox: 0,
};

export const Action = createActions(
  {
    updateState: ["props"]
  },
  {
    prefix: "CART/"
  }
);

export default createReducer(initialState, {
  [Action.Types.UPDATE_STATE]: (state, { props }) => ({
    ...state,
    ...props
  })
});
