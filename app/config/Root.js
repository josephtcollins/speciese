import React, { Component } from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from '../components/App';
import Profile from '../components/profile/profile';
import SignUpPage from '../components/SignUpPage';
import LoginPage from '../components/LoginPage';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

export default class Root extends Component {
  render() {
    return (
      <Router history={history} key={new Date()}>
        <Route path="/" component={App} />
        <Route path="/account" component={Profile} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
      </Router>
    );
  }
}
