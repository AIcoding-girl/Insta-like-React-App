import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";

// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />

      <Route path="*" component={NotFound} />
      {/* <Route path="*" component={() => "404 Not Found"} /> */}
    </Switch>
  );
}

export default App;
