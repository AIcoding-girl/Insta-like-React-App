import React from "react";
import { Switch, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
// import other css files

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />

      <Route path="*" component={NotFound} />
      {/* <Route path="*" component={() => "404 Not Found"} /> */}

      <PrivateRoute path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
