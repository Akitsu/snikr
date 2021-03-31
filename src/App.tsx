import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Overview from './Overview';
import Comparator from './Comparator';

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/compare">Compare</Link>
        </li>
      </ul>
      <hr/>
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
