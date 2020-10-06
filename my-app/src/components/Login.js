import React from " react";
import { Route, Redirect } from "react-dom";
import auth from "../auth";
// import PrivateRoute from "./PrivateRoute";

class Login extends React.Component {
  state = {
    redirectToReferrer: false,
  };

  login = () => {
    auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true,
      }));
    });
  };

  render() {
    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: "/" } };

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Login;
