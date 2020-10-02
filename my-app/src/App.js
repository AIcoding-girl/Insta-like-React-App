import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'

// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />

      <Route path="*" component={() => "404 Not Found"} />
    </Switch>
  )
}

export default App;