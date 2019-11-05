import React, { FunctionComponent, useContext, ReactNode, useEffect, useState } from 'react';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';
import Login from '../login/Login';
import {
  Route,
  Switch,
  RouteComponentProps,
  RouteProps,
} from 'react-router';
import Home from '../home/Home';

type ProtectedRouteProps<P> = RouteProps &
  P & {
    component: new (props: P) => React.Component<P>;
  };

export const ProtectedRoute = ({
  component: Component,
  ...rest
}: ProtectedRouteProps<any>) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { statusResponse } = useContext(MyFacebookContext);
  useEffect(() => {
    const isAuth = statusResponse 
      ? statusResponse.status === 'connected'
      : false; 
    setIsAuthenticated(isAuth);
  }, [Component, statusResponse])

  const render = (props: RouteComponentProps<any>): ReactNode => {
    return isAuthenticated
      ? <Component {...props} />
      : <Login />
  };

  return <Route {...rest} render={render} />;
};

const Routes: FunctionComponent = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" component={Home} />
    </Switch>
  );
}

export default Routes;
