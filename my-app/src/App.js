import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SignIn from './pages/sign-in';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />

      <Route path="*" component={() => "404 Not Found"} />
    </Switch>
  )
}

export default App;