import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Button from 'components/Button'

import LoginForm from './LoginForm'
import FormDivider from './FormDivider'
import Wrapper from './Wrapper'

import { loginSubmit } from './ducks/actions'
import { getLoadingState } from './ducks/selectors'

export class Login extends Component {
  handleSubmit = values => {
    this.props.loginSubmit(values)
  }

  render () {
    return (
      <Wrapper>
        <LoginForm isLoading={this.props.isLoading} onSubmit={this.handleSubmit} />
        <FormDivider>Noch keinen Account?</FormDivider>
        <Button to='/register' secondary>Registrieren</Button>
      </Wrapper>
    )
  }
}

Login.propTypes = {
  isLoading: PropTypes.bool,
  loginSubmit: PropTypes.func.isRequired
}

export const mapStateToProps = state => {
  return {
    isLoading: getLoadingState(state)
  }
}

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginSubmit
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
