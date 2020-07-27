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
import UserSearch from './components/Search.js';
import Err from './components/Error.js';

// styles
import './styles/App.css';
import { connect } from 'react-redux';

function App({err}) {
  return (
    <div className="App">
      <Router>
        <HomeHeader />
        {err.main && 
          <Err msg={err.msg}/>
        }
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cities">
            <Cities />
          </Route>
          <Route exact path="/search">
            <UserSearch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    err: state.errorStatus
  }
}

export default connect(mapStateToProps, null)(App);
