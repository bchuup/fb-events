import React, { useEffect, FunctionComponent, useState } from 'react';

export const MyFacebookContext = React.createContext<{ 
  statusResponse: fb.StatusResponse | undefined,
  setStatusResponse: React.Dispatch<React.SetStateAction<fb.StatusResponse | undefined>>
  getIsAuthenticated: () => boolean;
  logout: () => void;
}>({ 
  statusResponse: undefined,
  setStatusResponse: () => null,
  getIsAuthenticated: () => false,
  logout: () => null,
});

declare global {
  interface Window { fbAsyncInit: any, FB: fb.FacebookStatic }
}

const FacebookSdkProvider: FunctionComponent = ({ children }) => {
  const [statusResponse, setStatusResponse] = useState<fb.StatusResponse | undefined>(undefined)

  useEffect(() => {
    FB.getLoginStatus((response: fb.StatusResponse) => {
      if (response.status === 'connected') {
        setStatusResponse(response);
      }
    });
  }, []);

  // useEffect(() => {
  //   console.log('parsing');
  //   FB.XFBML.parse(document.getElementById('fb-login-button'));
  // }, []);

  const getIsAuthenticated = () => {
    return (statusResponse && (statusResponse.status === 'connected')) || false;
  }

  const logout = () => {
    return FB.logout((response: fb.StatusResponse) => {
      setStatusResponse(response);
    })
  }

  return (
    <MyFacebookContext.Provider value={{ statusResponse, setStatusResponse, getIsAuthenticated, logout }}>
      {children}
    </MyFacebookContext.Provider>
  )
}

export default FacebookSdkProvider;