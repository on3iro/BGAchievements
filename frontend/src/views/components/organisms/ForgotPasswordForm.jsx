// @flow

import * as React from 'react'
import styled from 'styled-components'

import Button from 'views/components/atoms/Button'
import Form from 'views/components/atoms/Form'
import FormGroup from 'views/components/molecules/FormGroup'

const Wrapper = styled(Form)`
  margin-top: ${props => (props.theme.buildingUnit * 5)}px;
`

class ForgotPasswordForm extends React.PureComponent<Object> {
  render () {
    return (
      <Wrapper>
        <FormGroup id='email' type='email' label='E-Mail-Address' />
        <Button type='submit'>Reset password</Button>
      </Wrapper>
    )
  }
}

export {
  ForgotPasswordForm as default
}
