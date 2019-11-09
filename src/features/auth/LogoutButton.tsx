import React, { FunctionComponent, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const LogoutButton: FunctionComponent = () => {
  const { logout } = useContext(MyFacebookContext);
  return (
    <IconButton onClick={logout} color="inherit">
      <ExitToAppIcon />
    </IconButton>
  )
};

export default LogoutButton;