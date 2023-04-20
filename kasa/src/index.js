import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Logements from './pages/Logments';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (<App/>);


/*
 <React.StrictMode>
    <Router>
      <Route path='/'>
        <App/>
      </Route>
      <Route path="/logements">
        <Logements/>
      </Route>
    </Router>
  </React.StrictMode>
  */
