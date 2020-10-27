import React from 'react';
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom";

import { HomeHeader } from './components/Home/HomeHeader.jsx';
import Home from './components/Home/Home.jsx';
import Cities from './components/Cities.jsx';
import UserSearch from './components/Search.jsx';
import Err from './components/Error.jsx';

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
