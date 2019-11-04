import React, { useEffect, FunctionComponent } from 'react';

const MyFacebookContext = React.createContext<any>(null);

declare global {
  interface Window { fbAsyncInit: any, FB: fb.FacebookStatic }
}

const FacebookSdkProvider: FunctionComponent = ({ children }) => {

  useEffect(() => {
    window.FB.getLoginStatus((response: fb.StatusResponse) => {
      console.log('response', response);
    });
    // const fbAsyncInit = async () => {
    //   window.FB.init({
    //     appId: process.env.REACT_APP_FB_APP_ID || '',
    //     autoLogAppEvents: true,
    //     version: 'v4.0',
    //   })
      // window.FB.login(function (response: fb.StatusResponse) {
      //   if (response.authResponse) {
      //     console.log('Welcome!  Fetching your information.... ');
      //     console.log('authResponse', response.authResponse);
      //     window.FB.getLoginStatus(function (response: fb.StatusResponse) {
      //       console.log('getLoginStatus', response);
      //     });
      //   } else {
      //     console.log('User cancelled login or did not fully authorize.');
      //   }
      // });
    // }
    // fbAsyncInit().then(() => {
    //   console.log(window);
    // })
  });
  return (
    <MyFacebookContext.Provider value={{test: 'hello'}}>
      {children}
    </MyFacebookContext.Provider>
  )
}

export default FacebookSdkProvider;