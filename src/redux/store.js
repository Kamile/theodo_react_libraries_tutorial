import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga'
import counterReducer from './counter.reducer';
import commentsReducer from './comments.reducer';
import counterRootSaga from './counter.sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({
    counter: counterReducer,
    commentStore: commentsReducer,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(counterRootSaga)

export default store;
