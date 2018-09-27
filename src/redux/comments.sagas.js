import { call, put, takeEvery } from "redux-saga/effects";
import {
  types,
  getCommentsSuccess,
  addCommentSuccess
} from "../actions/comments";
import { getComments, addComment } from "../services/comments";

function* getCommentsSaga() {
  try {
    const { comments } = yield call(getComments);
    yield put(getCommentsSuccess(comments));
  } catch (e) {
    console.error(e);
  }
}

function* addCommentSaga(comment) {
  try {
    const { comments } = yield call(addComment);
    yield put(addCommentSuccess(comments));
  } catch (e) {
    console.error(e);
  }
}

function* commentsRootSaga() {
  yield takeEvery(types.GET.REQUEST, getCommentsSaga);
  yield takeEvery(types.ASYNC_ADD_COMMENT.REQUEST, addCommentSaga);
}

export default commentsRootSaga;
