import React, { useEffect, FunctionComponent, useState } from 'react';

export const MyFacebookContext = React.createContext<{ 
  statusResponse: fb.StatusResponse | undefined,
  setStatusResponse: React.Dispatch<React.SetStateAction<fb.StatusResponse | undefined>>
}>({ 
  statusResponse: undefined,
  setStatusResponse: () => null
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
  return (
    <MyFacebookContext.Provider value={{ statusResponse, setStatusResponse }}>
      {children}
    </MyFacebookContext.Provider>
  )
}

export default FacebookSdkProvider;