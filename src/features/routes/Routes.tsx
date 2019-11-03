import React, { FunctionComponent } from 'react';
import Login from '../login/Login';
import {
  Route,
  Switch
} from 'react-router-dom';

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <Route path="/about">
        <div> ABOUT </div>
      </Route>
      <Route path="/users">
        <div> USERS </div>
      </Route>
      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default Routes;
