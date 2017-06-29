/**
  * Main Application component.
  *
  * @namespace App
  */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { ConnectedRouter as Router } from 'react-router-redux'
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Grid from 'grid-styled'

import * as authSelectors from 'containers/Auth/ducks/selectors'
import { getLocation } from './ducks/selectors'

import DefaultTheme from 'themes/default'

import Header from 'components/Header'

import Content from './Content'

import GlobalMessage from 'containers/GlobalMessage'
import Impressum from 'containers/ImpressumPage'
import Logout from 'containers/Auth/Logout'

export class App extends Component {
  /**
   * Main App component
   * Wraps children
   * @class App
   * @namespace App
   * @memberOf App
   * @param {Object} props - React props
   * @param {Object} props.children - Child Components
    */

  render () {
    return (
      <Router history={this.props.history}>
        <ThemeProvider theme={DefaultTheme}>
          <Grid md={6 / 6}>
            <Header isLoggedIn={this.props.isLoggedIn} routerLocation={this.props.routerLocation} />
            <Grid md={1 / 8} lg={1 / 6} />
            <Grid md={6 / 8} lg={4 / 6}>
              <GlobalMessage />
              <Content>
                <Switch>
                  <Route exact path='/' render={() => (<Redirect to='/home' />)} />
                  <Route path='/impressum' component={Impressum} />
                  <Route path='/logout' component={Logout} />
                </Switch>
              </Content>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Router>
    )
  }
}

App.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  routerLocation: PropTypes.object
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: authSelectors.getLoggedIn(state),
    routerLocation: getLocation(state)
  }
}

export default connect(mapStateToProps, null)(App)
