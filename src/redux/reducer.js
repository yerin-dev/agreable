import { combineReducers } from "redux";

import appReducer from "./app/redux";
import cartReducer from "./cart/redux";
import homeReducer from "./home/redux";
import productReducer from "./product/redux";

const reducers = combineReducers({
  app: appReducer,
  cart: cartReducer,
  home: homeReducer,
  product: productReducer
});

export default reducers;
