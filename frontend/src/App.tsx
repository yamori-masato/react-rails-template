import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { logout } from './apis/auth'
import AuthProvider from './auth/AuthProvider'
import PrivateRoute from './auth/PrivateRoute'
import {
  Login,
  Home,
  Dashboard
} from './pages'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;
