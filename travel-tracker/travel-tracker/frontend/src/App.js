import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Tracker from './components/Tracker';
import TravelPlanner from './components/TravelPlanner';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/planner" component={TravelPlanner} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

