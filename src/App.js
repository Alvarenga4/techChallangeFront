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
import Success from './pages/Success'
import Failed from './pages/Failed'

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simulation/:id" component={Simulation} />
          <Route path="/success/:id" component={Success} />
          <Route path="/failed/" component={Failed} />
        </Switch>
      </Router>
    </>
  );
}