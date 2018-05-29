import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import { FACEBOOK_URL,APP_ID, APP_SECRET } from "../../config/globals";

export function* watcherSaga() {
  yield takeLatest("REQUEST_ACCOUNT_KIT_TOKEN", workerAccountKit);
}

function requestAccountKitToken(code) {
   return axios({
       method: "get",
       url: `${FACEBOOK_URL}access_token?grant_type=authorization_code&code=${code}&access_token=AA|${APP_ID}|${APP_SECRET}`,
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       }
   });
}

function requestValidateToken(access_token) {
    return axios({
        method: "get",
        url: `${FACEBOOK_URL}me/?access_token=${access_token}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}


function* workerAccountKit(payload) {
  try {
    let response = yield call(requestAccountKitToken, payload.code);

    const tokens = response.data;
    response = yield call(requestValidateToken, tokens.access_token);

    const account = response.data;

    yield put({ type: "ACCOUNT_KIT_TOKEN_SUCCESS", tokens, account });

  } catch (error) {
    yield put({ type: "ACCOUNT_KIT_TOKEN_FAILURE", error });
  }
}