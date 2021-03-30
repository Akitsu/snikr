import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Comparator from './Comparator';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Comparator />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
