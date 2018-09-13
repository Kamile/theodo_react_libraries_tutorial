import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'
import {
  types,
  getValueSuccess
} from './counter.actions'
import {
  getValue,
} from '../services/counter.service'


function* getValueSaga() {
  try {
    const {
      value
    } = yield call(getValue)
    yield put(getValueSuccess(value))
  } catch (e) {
    console.error(e)
  }
}

function* counterRootSaga() {
  yield takeEvery(types.GET.REQUEST, getValueSaga)
}

export default counterRootSaga;
