import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../reducers/counter";
import counterRootSaga from "./counter.sagas";
import commentReducer from "../reducers/comments"; // TODO move store.js file to reducers dir

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    counter: counterReducer,
    comments: commentReducer
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(counterRootSaga);

export default store;
