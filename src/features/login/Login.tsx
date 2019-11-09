import React, { FunctionComponent, useEffect, useContext } from 'react';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';

declare global {
  interface Window { checkLoginState: () => void }
}

const LoginContainer = styled(Grid)`
  height: 100vh;
`

const Login: FunctionComponent = () => {
  const { setStatusResponse, getIsAuthenticated } = useContext(MyFacebookContext);
  const history = useHistory();

  useEffect(() => {
    FB.XFBML.parse();
  }, []);
  useEffect(() => {
    window.checkLoginState = () => {
      FB.getLoginStatus(function (response) {
        setStatusResponse(response);
      });
    }
  });
  useEffect(() => {
    if (getIsAuthenticated()) {
      return history.push('/');
    }
  });
  return (
    <LoginContainer 
      container={true} 
      alignItems="center" 
      justify="center"
    >
      <div
        id="fb-login-button"
        className="fb-login-button" 
        data-size="large" 
        data-button-type="continue_with" 
        data-use-continue-as="false" 
        data-onlogin="checkLoginState()"
      />  
    </LoginContainer>
  )
};

export default Login;