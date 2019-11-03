import React, { useEffect, FunctionComponent } from 'react';

const MyFacebookContext = React.createContext<any>(null);

declare global {
  interface Window { fbAsyncInit: any, FB: any }
}

// window.fbAsyncInit = window.fbAsyncInit || {};
// window.FB = window.FB || {};

// interface Window {
//   fbAsyncInit: () => any;
//   FB: () => any;
// }

const FacebookSdkProvider: FunctionComponent = ({ children }) => {
  useEffect(() => {
    (async () => {
      window.FB.init({
        appId: process.env.REACT_APP_FB_APP_ID,
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v4.0'
      });
      window.FB.login(function (response: any) {
        if (response.authResponse) {
          console.log('Welcome!  Fetching your information.... ');
          console.log('authResponse', response.authResponse);
          window.FB.getLoginStatus(function (response: any) {
            console.log('getLoginStatus', response);
          });
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    })();
  });
  return (
    <MyFacebookContext.Provider value={{test: 'hello'}}>
      {children}
    </MyFacebookContext.Provider>
  )
}

export default FacebookSdkProvider;