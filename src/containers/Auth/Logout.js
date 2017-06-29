import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import * as selectors from './ducks/selectors'
import { logout } from './ducks/actions'

export class Logout extends Component {
  componentWillMount () {
    if (this.props.isLoggedIn) this.props.logout()
  }

  render () {
    return !this.props.isLoggedIn && (
      <Redirect to={{
        pathname: '/login'
      }} />
    )
  }
}

Logout.propTypes = {
  isLoggedIn: PropTypes.bool,
  logout: PropTypes.func.isRequired
}

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: selectors.getLoggedIn(state)
  }
}

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
