import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({
  /* destructure from props */
  isAuthenticated,
  component: Component,
  ...rest // Rest operator gives access to all of the other stuff we didn't destructure
}) => (
  <Route
    {...rest}
    component={props =>
      // props.component either renders Component or throws user to homepage
      (isAuthenticated ? (
        <div>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      ))
    }
  />
);

export default PrivateRoute;
