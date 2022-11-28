import {types} from './actiontypes';

export function fetchAirLines() {
  console.log("called 1st")
  return {
    type: types.GET_DATA,
    payload: {},
  };
}

export function searchAir(name:any) {
  console.log("called 1st")
  return {
    type: types.SEARCH,
    payload: name,
  };
}




export function fetchFail(e) {
  return {type: 'FETCH_ERRROR', payload: e};
}
