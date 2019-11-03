import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './features/routes/Routes'
import FacebookSdkProvider from './contextProviders/FacebookSdkProvider';


function App() {
  return (
    <div className="App">
      <FacebookSdkProvider>
        <Router>
          <Routes />
        </Router>
      </FacebookSdkProvider>
    </div>
  );
}

export default App;
