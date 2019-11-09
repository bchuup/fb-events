import { useContext, useEffect, useState } from 'react';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';

const useIsAuthenticated = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { statusResponse } = useContext(MyFacebookContext);

  useEffect(() => {
    const isAuth = statusResponse
      ? statusResponse.status === 'connected'
      : false;
    setIsAuthenticated(isAuth);
  }, [statusResponse])

  return isAuthenticated;
};

export default useIsAuthenticated;