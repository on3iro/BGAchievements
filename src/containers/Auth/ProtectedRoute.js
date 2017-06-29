import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { getLoggedIn } from './ducks/selectors'

export const ProtectedRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isLoggedIn
      ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: getLoggedIn(state)
  }
}

ProtectedRoute.propTypes = {
  component: PropTypes.any.isRequired,
  location: PropTypes.object
}

export default connect(mapStateToProps, null)(ProtectedRoute)
