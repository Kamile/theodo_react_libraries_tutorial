import { call, put, takeEvery } from "redux-saga/effects";
import {
  types,
  getValueSuccess,
  incrementValueSuccess
} from "./counter.actions";
import { getValue, incrementValue } from "../services/counter.service";

function* getValueSaga() {
  try {
    const { value } = yield call(getValue);
    yield put(getValueSuccess(value));
  } catch (e) {
    console.error(e);
  }
}

function* incrementValueSaga() {
  console.log("incrementValueSaga got called");
  try {
    const { value } = yield call(incrementValue);
    yield put(incrementValueSuccess(value));
  } catch (e) {
    console.error(e);
  }
}

function* counterRootSaga() {
  yield takeEvery(types.GET.REQUEST, getValueSaga);
  yield takeEvery(types.ASYNC_INCREMENT.REQUEST, incrementValueSaga);
}

export default counterRootSaga;
