import React, { useEffect, FunctionComponent, useState } from 'react';

export const MyFacebookContext = React.createContext<{ 
  statusResponse: fb.StatusResponse | undefined,
  setStatusResponse: React.Dispatch<React.SetStateAction<fb.StatusResponse | undefined>>
  getIsAuthenticated: () => boolean;
}>({ 
  statusResponse: undefined,
  setStatusResponse: () => null,
  getIsAuthenticated: () => false,
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

  const getIsAuthenticated = () => {
    return (statusResponse && (statusResponse.status === 'connected')) || false;
  }

  return (
    <MyFacebookContext.Provider value={{ statusResponse, setStatusResponse, getIsAuthenticated }}>
      {children}
    </MyFacebookContext.Provider>
  )
}

export default FacebookSdkProvider;