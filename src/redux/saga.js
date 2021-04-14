import { all, call } from "redux-saga/effects";
import appSaga from "./app/saga";
import cartSaga from "./cart/saga";
import homeSaga from "./home/saga";
import productSaga from "./product/saga";

function* sagas() {
  yield all([
    call(appSaga),
    call(cartSaga),
    call(homeSaga),
    call(productSaga)
  ]);
}

export default sagas;
