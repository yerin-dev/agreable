import { bindActionCreators } from "redux";
import store from "./store";

import { Action as AppAction } from "./app/redux";
import { Action as ProductAction } from "./product/redux";

const { dispatch } = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const productActions = bindActionCreators(ProductAction.Creators, dispatch);
