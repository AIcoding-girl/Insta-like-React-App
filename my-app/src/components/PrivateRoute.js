import React from "react";
import { Redirect, Route } from "react-router-dom";
// import Login from "./Login";
// import routes from "./constants/routes";

const PrivateRoute = ({ path, component: Component, layout, ...rest }) => {
  return (
    <Route
      render={(props) => {
        if (this.Auth.authenticated) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
                error: "You need to login first!",
              },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
