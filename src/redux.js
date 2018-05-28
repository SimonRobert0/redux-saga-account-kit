// action types
const REQUEST_ACCOUNT_KIT_TOKEN = "REQUEST_ACCOUNT_KIT_TOKEN";
const ACCOUNT_KIT_TOKEN_SUCCESS = "ACCOUNT_KIT_TOKEN_SUCCESS";
const ACCOUNT_KIT_TOKEN_FAILURE = "ACCOUNT_KIT_TOKEN_FAILURE";

// reducer with initial state
const initialState = {
  fetching: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_ACCOUNT_KIT_TOKEN:
        return { ...state, fetching: true, error: null };
        break;
    case ACCOUNT_KIT_TOKEN_SUCCESS:
        return { ...state, fetching: false, error: null };
        break;
    case ACCOUNT_KIT_TOKEN_FAILURE:
      return { ...state, fetching: false, error: action.error };
      break;

    default:
      return state;
  }
}
