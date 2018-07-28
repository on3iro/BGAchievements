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
import Home from 'views/pages/Home'

import Content from 'views/components/atoms/Content'
import Header from 'views/components/organisms/Header'
import PageWrapper from 'views/components/atoms/PageWrapper'

const App = () => (
  <Router>
    <ThemeProvider theme={defaultTheme}>
      <PageWrapper>
        <Header />
        <Content>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </Content>
      </PageWrapper>
    </ThemeProvider>
  </Router>
)

export {
  App as default
}
