import React, { FunctionComponent, useEffect, useContext } from 'react';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';
import { useHistory } from 'react-router-dom';

declare global {
  interface Window { checkLoginState: () => void }
}

const Login: FunctionComponent = () => {
  const { statusResponse, setStatusResponse, getIsAuthenticated } = useContext(MyFacebookContext);
  const history = useHistory();

  useEffect(() => {
    FB.XFBML.parse(document.getElementById('fb-login-button'));
  }, []);
  useEffect(() => {
    window.checkLoginState = () => {
      FB.getLoginStatus(function (response) {
        setStatusResponse(response);
      });
    }
  }, []);
  useEffect(() => {
    if (getIsAuthenticated()) {
      return history.push('/');
    }
  }, [statusResponse]);

  return (
    <div>
      <div
        id="fb-login-button"
        className="fb-login-button" 
        data-size="large" 
        data-button-type="continue_with" 
        data-auto-logout-link="false" 
        data-use-continue-as="false" 
        data-onlogin="checkLoginState()"
      />  
    </div>
  )
};

export default Login;