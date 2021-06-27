import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { HomePage, Error500, Error404 } from './views/index';
import { AppLayout } from './components/index';

type RouteProps = {
  path: string;
  component: any;
};

const pages = [
  {
    path: '/app',
    component: HomePage
  }
];

export default function PublicApp() {
  const SignOutHandler = () => {
    return (
      <div>
        <Redirect to='/' />
      </div>
    );
  };

  return (
    <div>
      <Router>
        <AppLayout>
          <Switch>
            <Route exact path='/signout' component={SignOutHandler} />

            {/* App Routes */}
            {pages.map((page: RouteProps) => (
              <Route key={nanoid()} {...page} />
            ))}

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />

            <Route exact path='/' component={HomePage} />

            <Route path='*' component={Error404} />
          </Switch>
        </AppLayout>
      </Router>
    </div>
  );
}
