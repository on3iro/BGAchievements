// @flow

import React from 'react'
import styled from 'styled-components'

import Button from 'views/components/atoms/Button'
import Form from 'views/components/atoms/Form'
import FormGroup from 'views/components/molecules/FormGroup'

const Wrapper = styled(Form)`
  margin-top: ${props => (props.theme.buildingUnit * 12)}px;
`

const LoginForm = () => (
  <Wrapper>
    <FormGroup id='username' type='text' label='Username' disabled />
    <FormGroup id='password' type='password' label='Password' />
    <Button type='submit'>Test</Button>
  </Wrapper>
)

export {
  LoginForm as default
}
