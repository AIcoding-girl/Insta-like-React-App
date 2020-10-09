import React from "react";
import { Switch, Route } from "react-router-dom";

// import PrivateRoute from "./components/PrivateRoute";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";
// import other css files

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      {/* <Route path="*" component={() => "404 Not Found"} /> */}
      {/* <PrivateRoute path="/home" component={Home} /> */}
      <Route path="/home" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default App;
