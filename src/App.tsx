import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './Components/Overview';
import Comparator from './Components/Comparator';
import Header from './Components/Header';
import './App.sass';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Overview />
        </Route>
        <Route path="/compare">
          <Comparator />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
