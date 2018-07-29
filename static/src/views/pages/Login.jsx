// @flow

import React from 'react'
import styled from 'styled-components'

import P from 'views/components/atoms/P'
import Link from 'views/components/atoms/Link'
import Divider from 'views/components/atoms/Divider'
import LoginForm from 'views/components/organisms/LoginForm'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.theme.buildingUnit * 54)}px;
`

const CenteredText = styled(P)`
  text-align: center;
`

const RightAlignedText = styled(P)`
  text-align: right;
`

const Login = () => (
  <Wrapper>
    <LoginForm />
    <RightAlignedText>
      <Link to='/home'>Forgot password</Link>
    </RightAlignedText>
    <Divider />
    <CenteredText>
      You don't have an account yet?<br />
      <Link to='/home'>Register here</Link>
    </CenteredText>
  </Wrapper>
)

export {
  Login as default
}
