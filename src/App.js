import React, { Component } from "react";
import AccountKit from 'react-facebook-account-kit';
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";

function resultAccountKit(res) {
    if (res.status === "PARTIALLY_AUTHENTICATED") {
        console.log(res);
    }
}

class App extends Component {
  render() {
    const { } = this.props;

    return(
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Redux-Saga-Account-Kit</h1>
            </header>

            <AccountKit
                appId="211890532752594"
                version="v1.0"
                onResponse={res => resultAccountKit(res)}
                csrf={'myDifficultKey'}
                countryCode="+33"
                language="fr_FR"
                debug={"true"}
            >
                {p => <button {...p}>Initialize Account Kit</button>}
            </AccountKit>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
