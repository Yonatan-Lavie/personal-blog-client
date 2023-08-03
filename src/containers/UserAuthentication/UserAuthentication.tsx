// containers/UserAuthentication/UserAuthentication.tsx

import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import SignUpForm from '../../forms/SignUpForm';
import SignInForm from '../../forms/SignInForm';

const UserAuthentication: React.FC = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <h2>User Authentication</h2>
      <ul>
        <li>
          <Link to={`${url}/signup`}>Sign Up</Link>
        </li>
        <li>
          <Link to={`${url}/signin`}>Sign In</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/signup`} component={SignUpForm} />
        <Route exact path={`${path}/signin`} component={SignInForm} />
      </Switch>
    </div>
  );
};

export default UserAuthentication;
