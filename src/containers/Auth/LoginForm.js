/**
  * Renders a basic LoginForm
  *
  * @namespace PasswordGenerator.LoginForm
  * @memberOf PasswordGenerator
  */

import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

import H1 from 'components/H1'
import Button from 'components/Button'
import LoadingSpinner from 'components/LoadingSpinner'

import FormField from 'components/FormField'

export const validate = values => {
  const errors = {}
  const REQUIRED = 'Pflichtfeld'

  if (!values.email) {
    errors.email = REQUIRED
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Ungültige Email-Adresse!'
  }

  if (!values.password) {
    errors.password = REQUIRED
  }

  return errors
}

export const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <H1>Login</H1>
      <Field name='email' type='text'
        component={FormField} label='Email'
      />
      <Field name='password' type='password'
        component={FormField} label='Passwort'
      />
      {
        props.isLoading
        ? <Button onClick={(e) => e.preventDefault}>
          <LoadingSpinner controls />
        </Button>
        : <Button submit >Anmelden</Button>
      }
    </form>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool
}

// Decorate the form component
export default reduxForm({
  form: 'login',
  validate
})(LoginForm)
