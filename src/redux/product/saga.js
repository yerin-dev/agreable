import { all, takeLatest, call, put, select } from "redux-saga/effects";
import { Action } from "./redux";
import API from "../../api";

const saga = function* () {
  yield all([
    takeLatest(Action.Types.GET_PRODUCT_ITEMS, function* ({ data }) {
      yield put(Action.Creators.updateState({ isLoading: true }));
      const { item: productData } = yield select(state => state.product);

      try {
        const result = yield call(API.getProductItems, data);

        if (result) {
          yield put(
            Action.Creators.updateState({
              item: [...productData, ...result],
            })
          );
        }
      } catch (e) {
        console.log("@@ e", e);
      }

      yield put(Action.Creators.updateState({ isLoading: false }));

    })
  ]);
};

export default saga;