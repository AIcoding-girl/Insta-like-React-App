import React from "react";
import { Redirect, Route } from "react-router-dom";
// import routes from "./constants/routes";

// ({path, component: Component, layout, ...rest})

const PrivateRoute = ({path, component: Component, layout, ...rest}) => {
  return (
    <Route
      render={() => {
        if (loggedIn) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: routes.LOGIN,
              state: {
                prevLocation: path,
                error: "You need to login first!"
              }
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;