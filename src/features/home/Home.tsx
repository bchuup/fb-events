import React, { FunctionComponent, useContext } from 'react';
import { Button } from '@material-ui/core';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';

const Home: FunctionComponent = () => {
  const { logout } = useContext(MyFacebookContext);
  return (
    <div>
      <Button onClick={logout} color="primary">logout</Button>
    </div>
  )
};

export default Home;