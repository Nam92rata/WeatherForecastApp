import { createStore, Middleware, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from './reducer';
import weatherWatcherSaga from './weatherWatcherSaga';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    sagaMiddleware
)

const store = createStore(reducer, middleware);

sagaMiddleware.run(weatherWatcherSaga);

export default store;
