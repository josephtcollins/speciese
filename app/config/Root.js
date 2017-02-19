import React, { Component } from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from '../components/App';
import Profile from '../components/profile/profile';
import Login from '../components/Login';

const history = useRouterHistory(createHashHistory)({ queryKey: false });

export default class Root extends Component {
  render() {
    return (
      <Router history={history} key={new Date()}>
        <Route path="/" component={App} />
        <Route path="/account" component={Profile} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}
