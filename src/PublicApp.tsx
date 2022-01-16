import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, Error500, Error404 } from './views/index';
import { PublicLayout } from './components/index';

export default function PublicApp() {
  return (
    <div>
      <Router>
        <PublicLayout>
          <Switch>
            {/* Public Routes */}
            <Route exact path='/' component={HomePage} />

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />

            <Route path='*' component={Error404} />
          </Switch>
        </PublicLayout>
      </Router>
    </div>
  );
}
