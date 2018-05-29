# Redux Saga Account Kit
React redux saga project with implementation of Account Kit for Website.

#### Clone repository
```sh
$ git clone https://github.com/SimonRobert0/redux-saga-account-kit.git
```

#### Init globals
> In src/config/globals, set variables with information from [Account Kit](https://developers.facebook.com/docs/accountkit)
```sh
export const APP_ID = "APP_ID_FROM_FACEBOOK_DEVELOPERS";
export const APP_SECRET = "APP_SECRET_FROM_FACEBOOK_DEVELOPERS";
export const APP_VERSION = "v1.3";
export const FACEBOOK_URL = `https://graph.accountkit.com/${APP_VERSION}/`;
export const CSRF = "myDifficultKey";
```

#### Install dependancies
```sh
yarn
or
npm install
```

#### Launch project
```sh
yarn start
```

#### How to use
```js
import React from 'react';
import ReactDOM from 'react-dom';
import AccountKit from 'react-facebook-account-kit';

ReactDOM.render(
    <AccountKit
        appId={APP_ID}
        version={APP_VERSION}
        onResponse={res => this.resultAccountKit(res)}
        csrf={CSRF}
        countryCode={"+33"}
        language={"fr_FR"} >
            {p => <button {...p}>Account Kit</button>}
    </AccountKit>,
    document.getElementById('app')
);
```

Project from [react-facebook-account-kit](https://github.com/zsajjad/react-facebook-account-kit) repository