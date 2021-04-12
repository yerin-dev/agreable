import { combineReducers } from "redux";

import appReducer from "./app/redux";
import productReducer from "./product/redux";

const reducers = combineReducers({
  app: appReducer,
  product: productReducer
});

export default reducers;
