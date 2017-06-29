/**
  * User registration page
  *
  * @namespace Register
  */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'

import * as selectors from './ducks/selectors'

import Button from 'components/Button'

import Wrapper from './Wrapper'
import RegisterForm from './RegisterForm'
import FormDivider from './FormDivider'

import { registerSubmit } from './ducks/actions'

export class Register extends Component {
  handleSubmit = values => {
    this.props.registerSubmit(values)
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    return (
      this.props.hasRegistered || this.props.isLoggedIn
        ? (
          <Redirect to={from} />
        ) : (
          <Wrapper>
            <RegisterForm isLoading={this.props.isLoading} onSubmit={this.handleSubmit} />
            <FormDivider>Schon registriert?</FormDivider>
            <Button to='/login' secondary>Anmelden</Button>
          </Wrapper>
        )
    )
  }
}

Register.propTypes = {
  hasRegistered: PropTypes.bool,
  isLoading: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  location: PropTypes.object,
  registerSubmit: PropTypes.func.isRequired
}

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    registerSubmit
  }, dispatch)
}

export const mapStateToProps = (state) => {
  return {
    hasRegistered: selectors.getRegistered(state),
    isLoggedIn: selectors.getLoggedIn(state),
    isLoading: selectors.getLoadingState(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
