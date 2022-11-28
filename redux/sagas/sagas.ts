import {call, put, takeEvery} from 'redux-saga/effects';
import{ getAirlines,getAirlinesSpecific } from '../Api/fetchApi';
import {types} from '../action/actiontypes';
import axios from 'axios';
import { act } from 'react-test-renderer';
const url = 'https://jsonplaceholder.typicode.com/users';
function* getData() {
  try {
   console.log('called...2nd');
    const data = yield call(getAirlines);
    console.log(data + 'data from api');
    yield put({type: types.FETCH_SUCCESS, payload: data});
  } catch (error) {
    yield put({type: types.FETCH_ERROR, payload: 'error'});
  }
}
  function* getDataAir(action) {
    console.log(action.payload +"payload");

    try {
     console.log('called...2nd');
      const data = yield call(getAirlinesSpecific,action.payload);
      console.log(data + 'data from api');
      yield put({type: types.FETCH_SUCCESSAIR, payload: data});
    } catch (error) {
      yield put({type: types.FETCH_ERROR, payload: 'error'});
    }

  // try {
  //   const response: any = yield call(
  //     axios.get,
  //     'https://api.instantwebtools.net/v1/airlines',
  //   );
  //   console.log(response.data + 'data from api');
  //   yield put({type: types.FETCH_SUCCESS, payload: response.data});
  // } catch (error) {
  //   yield put({type: types.FETCH_ERROR, payload: 'error'});
  // }
  
}

export  function* mySagas() {
  // yield takeEvery(types.GET_DATA, getData);
  yield takeEvery(types.SEARCH, getDataAir);
}

