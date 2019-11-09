import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './features/routes/Routes'
import FacebookSdkProvider from './contextProviders/FacebookSdkProvider';
import ThemeProvider from './contextProviders/ThemeProvider';


function App() {
  return (
    <div className="App">
      <FacebookSdkProvider>
        <ThemeProvider>
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </FacebookSdkProvider>
    </div>
  );
}

export default App;
