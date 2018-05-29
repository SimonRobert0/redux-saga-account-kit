const facebookActions = {
    REQUEST_ACCOUNT_KIT_TOKEN: 'REQUEST_ACCOUNT_KIT_TOKEN',
    ACCOUNT_KIT_TOKEN_SUCCESS: 'ACCOUNT_KIT_TOKEN_SUCCESS',
    ACCOUNT_KIT_TOKEN_FAILURE: 'ACCOUNT_KIT_TOKEN_FAILURE',

    requestAccountKit: (code, state) => ({
        type: facebookActions.REQUEST_ACCOUNT_KIT_TOKEN,
        code,
        state
    })
};
export default facebookActions;