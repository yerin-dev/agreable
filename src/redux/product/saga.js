import { all, takeLatest, call, put } from "redux-saga/effects";
import { Action } from "./redux";
import API from "../../api";

const saga = function* () {
  yield all([
    takeLatest(Action.Types.GET_PRODUCT_ITEMS, function* ({ data }) {

      try {
        const result = yield call(API.getProductItems, data);

        if (result) {
          yield put(
            Action.Creators.updateState({
              item: result,
            })
          );
        }
      } catch (e) {
        console.log("@@ e", e);
      }

    })
  ]);
};

export default saga;