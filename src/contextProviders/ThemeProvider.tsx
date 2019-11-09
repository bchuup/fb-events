import React, { FunctionComponent } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: blueGrey[500],
    },
  },
});

const MyThemeProvider: FunctionComponent = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default MyThemeProvider;