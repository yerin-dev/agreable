import { createActions, createReducer } from "reduxsauce";

const initialState = {
    features: [],
};

export const Action = createActions(
  {
    updateState: ["props"],
    getFeatures: ["data"],
  },
  {
    prefix: "HOME/"
  }
);

export default createReducer(initialState, {
  [Action.Types.UPDATE_STATE]: (state, { props }) => ({
    ...state,
    ...props
  })
});
