import { combineReducers } from "redux";

import appReducer from "./app/redux";
import homeReducer from "./home/redux";
import productReducer from "./product/redux";

const reducers = combineReducers({
  app: appReducer,
  home: homeReducer,
  product: productReducer
});

export default reducers;
