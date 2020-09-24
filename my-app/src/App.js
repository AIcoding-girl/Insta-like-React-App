import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PhotoZ from './components/PhotoZ'

function App() {
  return (
    <Router>
      <div>
        <h1>Finally working?</h1>
        <Route exact path="/" component={PhotoZ} />
      </div>
    </Router>
  )
}

export default App;
