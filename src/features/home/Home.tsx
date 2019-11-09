import React, { FunctionComponent, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import { MyFacebookContext } from '../../contextProviders/FacebookSdkProvider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styled from 'styled-components';

const LogoutContainer = styled.div`
  padding: 1em;
  position: fixed;
  top: 0;
  right: 0;
`

const Home: FunctionComponent = () => {
  const { logout } = useContext(MyFacebookContext);
  return (
    <LogoutContainer>
      <IconButton onClick={logout} color="primary">
        <ExitToAppIcon/>
      </IconButton>
    </LogoutContainer>
  )
};

export default Home;