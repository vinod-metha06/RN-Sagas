import {spawn} from 'redux-saga/effects';

import {mySagas} from './sagas';

export default function* rootSaga() {
  yield spawn(mySagas);
}

// this one is not used..
