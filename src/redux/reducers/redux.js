import actions from '../actions/actions';

const initialState = {
    fetching: false,
    error: null,
    tokens: null,
    account: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_ACCOUNT_KIT_TOKEN:
        return { ...state, fetching: true, error: null };
        break;
    case actions.ACCOUNT_KIT_TOKEN_SUCCESS:
        return { ...state, fetching: false, error: null, tokens: action.tokens, account: action.account };
        break;
    case actions.ACCOUNT_KIT_TOKEN_FAILURE:
      return { ...state, fetching: false, error: action.error };
      break;

    default:
      return state;
  }
}
