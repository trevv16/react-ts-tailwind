import React from 'react';
import { nanoid } from 'nanoid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, Error500, Error404 } from './views/index';
import { PublicLayout } from './components/index';

type RouteProps = {
  path: string;
  component: any;
};

const pages = [
  {
    path: '/',
    component: HomePage
  }
  // {
  //   path: '/signup',
  //   component: SignUpPage
  // },
  // {
  //   path: '/signin',
  //   component: SignInPage
  // },
  // {
  //   path: '/forgot',
  //   component: ForgotPage
  // },
  // {
  //   path: '/reset-password/:resetToken',
  //   component: ResetPasswordPage
  // }
];

export default function PublicApp() {
  return (
    <div>
      <Router>
        <PublicLayout>
          <Switch>
            {/* Public Routes */}
            {pages.map((page: RouteProps) => (
              <Route key={nanoid()} {...page} />
            ))}

            {/* Error Pages */}
            <Route exact path='/500' component={Error500} />

            <Route path='*' component={Error404} />
          </Switch>
        </PublicLayout>
      </Router>
    </div>
  );
}
