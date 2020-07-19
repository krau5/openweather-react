import React from 'react';

// router
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

// components
import { HomeHeader } from './components/Home/HomeHeader.js';
import Home from './components/Home/Home.js';
import Cities from './components/Cities.js';

// styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cities">
            <Cities />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
