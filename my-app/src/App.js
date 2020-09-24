import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import SignIn from './components/SignIn'

function App() {
  return (
    <Router>
      <div>
        <h1>Finally working?</h1>
        <Route exact path="/" component={SignIn} />
      </div>
    </Router>
  )
}

export default App;
