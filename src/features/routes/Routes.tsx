import React, { FunctionComponent, useContext, ReactNode} from 'react';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';
import Login from '../login/Login';
import {
  Route,
  Switch,
  RouteComponentProps,
  RouteProps,
  Redirect,
} from 'react-router-dom';
import Home from '../home/Home';

type ProtectedRouteProps<P> = RouteProps &
  P & {
    component: new (props: P) => React.Component<P>;
  };

export const ProtectedRoute = ({
  component: Component,
  ...rest
}: ProtectedRouteProps<any>) => {
  const { getIsAuthenticated } = useContext(MyFacebookContext);

  const render = (props: RouteComponentProps<any>): ReactNode => {
    return getIsAuthenticated()
      ? <Component {...props} />
      : <Redirect to="/login" />
  };

  return <Route {...rest} render={render} />;
};

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
    </Switch>
  );
}

export default Routes;
