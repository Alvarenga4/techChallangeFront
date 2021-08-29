import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'

import Home from './pages/Home'
import Simulation from './pages/Simulation'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simulation/:id" component={Simulation} />
        </Switch>
      </Router>
    </>
  );
}