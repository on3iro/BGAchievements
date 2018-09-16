// @flow

import * as React from 'react'
import styled from 'styled-components'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import P from 'views/components/atoms/P'
import Link from 'views/components/atoms/Link'
import Divider from 'views/components/atoms/Divider'

import Header from 'views/components/organisms/Header'
import LoginForm from 'views/components/organisms/LoginForm'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.theme.buildingUnit * 54)}px;
`

class Login extends React.PureComponent<Object> {
  render () {
    return (
      <PageWrapper>
        <Header title='BGAchievements' />
        <Content>
          <Wrapper>
            <LoginForm />
            <P alignment='right'>
              <Link to='/forgot-password'>Forgot password</Link>
            </P>
            <Divider />
            <P alignment='center'>
              You don't have an account yet?<br />
              <Link to='/registration'>Register here</Link>
            </P>
          </Wrapper>
        </Content>
      </PageWrapper>
    )
  }
}

export {
  Login as default
}
