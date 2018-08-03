// @flow

import React from 'react'
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import defaultTheme from 'themes/default'

import Login from 'views/pages/Login'
import Registration from 'views/pages/Registration'
import ForgotPassword from 'views/pages/ForgotPassword'
import Home from 'views/pages/Home'

const App = () => (
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </ThemeProvider>
  </Router>
)

export {
  App as default
}
