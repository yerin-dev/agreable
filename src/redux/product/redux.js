import { createActions, createReducer } from "reduxsauce";

const initialState = {
  item: [],
  isLoading: false
};

export const Action = createActions(
  {
    updateState: ["props"],
    getProductItems: ["data"],
    deleteHistory: ["props"],
  },
  {
    prefix: "PRODUCT/"
  }
);

export default createReducer(initialState, {
  [Action.Types.UPDATE_STATE]: (state, { props }) => ({
    ...state,
    ...props
  }),

  [Action.Types.DELETE_HISTORY]: (state) => ({
    ...state,
    item: []
  })
});
