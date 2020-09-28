import React from 'react'
import { SignIn } from '../pages/SignIn'
import { FlatLayout } from './Layouts/FlatLayout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      
      <Route path="*" component={() => "404 Not Found"} />
    </Switch>
  )
}

export default App;