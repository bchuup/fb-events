import React, { FunctionComponent, useEffect, useContext } from 'react';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';

declare global {
  interface Window { checkLoginState: () => void }
}

const Login: FunctionComponent = () => {
  const { setStatusResponse } = useContext(MyFacebookContext);
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