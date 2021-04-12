import { createActions, createReducer } from "reduxsauce";

const initialState = {};

export const Action = createActions(
  {
    updateState: ["props"]
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
