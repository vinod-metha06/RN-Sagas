import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from '../reducers/reducer';
import rootSaga from '../sagas/rootSagas';
import { mySagas } from '../sagas/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const mystore = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga);

// render the application
export default mystore;