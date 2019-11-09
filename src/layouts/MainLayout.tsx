import React, { FunctionComponent, Component } from 'react';
import styled from 'styled-components';
import { AppBar, Grid, Toolbar } from '@material-ui/core';
import LogoutButton from '../features/auth/LogoutButton';

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Menu = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  margin: 1em;
  display: flex;
  flex-direction: column;
`;

const layout = (
  Component: React.ComponentType<any>,
): FunctionComponent => {
  return () => {
    return (
      <LayoutContainer>
        <Menu>
          <LogoutButton />
        </Menu>
        <Component />
      </LayoutContainer>
    );
  };
};

export default (
  component: React.ComponentType<any>,
) => layout(component);
