export const initialState = {
  loading: true,
  error: '',
  post: {},
};
export const reducer = (state = initialState, action:any) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: '',
      };
      case 'FETCH_SUCCESSAIR':
      return {
        loading: false,
        post: action.payload[0],
        error: '',
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: [],
        error: action.error,
      };
    default:
      return state;
  }
};
