import { createActions, createReducer } from "reduxsauce";

const initialState = {
  item: []
};

export const Action = createActions(
  {
    updateState: ["props"],
    getProductItems: ["data"]
  },
  {
    prefix: "PRODUCT/"
  }
);

export default createReducer(initialState, {
  [Action.Types.UPDATE_STATE]: (state, { props }) => ({
    ...state,
    ...props
  })
});
