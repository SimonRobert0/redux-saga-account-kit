import React, { Component } from "react";
import AccountKit from 'react-facebook-account-kit';
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import {APP_ID, APP_VERSION, CSRF} from "./config/globals";
import {Button, Col, Grid, Row} from "react-bootstrap";

class App extends Component {

    resultAccountKit(res) {
        const { requestAccountKit } = this.props;

        if (res.status === "PARTIALLY_AUTHENTICATED") {
            console.log(res);
            requestAccountKit(res.code, res.state);
        }
    }

    render() {
        const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
        const { account } = this.props;

        return(
            <div className="App">
                <Header />

                <Grid>
                    {account ? (
                        <Row>
                            <p>Connected ID : {account.id}</p>
                        </Row>
                    ) : (
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <AccountKit
                                    appId={APP_ID}
                                    version={APP_VERSION}
                                    onResponse={res => this.resultAccountKit(res)}
                                    csrf={CSRF}
                                    countryCode={"+33"}
                                    language={"fr_FR"}
                                    debug={"true"}
                                >
                                    {p => <Button {...p} style={wellStyles} block>Account Kit Phone number</Button>}
                                </AccountKit>
                            </Col>
                            <Col xs={12} md={12}>
                                <AccountKit
                                    appId={APP_ID}
                                    version={APP_VERSION}
                                    onResponse={res => this.resultAccountKit(res)}
                                    csrf={CSRF}
                                    language={"fr_FR"}
                                    debug={"true"}
                                    loginType={"EMAIL"}
                                >
                                    {p => <Button {...p} style={wellStyles} block>Account Kit Email</Button>}
                                </AccountKit>
                            </Col>
                        </Row>
                    )}
                </Grid>
            </div>
        )
    }
}

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Redux-Saga-Account-Kit</h1>
        </header>
    );
}

const mapStateToProps = state => {
  return {
      fetching: state.fetching,
      error: state.error,
      tokens: state.tokens,
      account: state.account
  };
};

const mapDispatchToProps = dispatch => {
  return {
      requestAccountKit: (code, state) => dispatch({ type: "REQUEST_ACCOUNT_KIT_TOKEN", code: code, state: state })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
