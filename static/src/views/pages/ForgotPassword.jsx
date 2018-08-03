// @flow

import * as React from 'react'
import styled from 'styled-components'
import { ChevronLeftIcon } from 'mdi-react'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import P from 'views/components/atoms/P'
import Link from 'views/components/atoms/Link'

import Header from 'views/components/organisms/Header'
import ForgotPasswordForm from 'views/components/organisms/ForgotPasswordForm'

const Wrapper = styled.div`
  margin: ${props => (props.theme.buildingUnit * 12)}px auto 0;
  max-width: ${props => (props.theme.buildingUnit * 54)}px;
`

const BackArrow = styled(ChevronLeftIcon)`
  margin: ${props => (props.theme.buildingUnit * -0.5)}px 0 0 ${props => (props.theme.buildingUnit * -1)}px;
`

class ForgotPassword extends React.PureComponent<Object> {
  render () {
    return (
      <PageWrapper>
        <Header title='BGAchievements' />
        <Content>
          <Wrapper>
            <P alignment='center'>
              You have forgotten your password? Then you can reset it here.
            </P>
            <ForgotPasswordForm />
            <P>
              <Link to='/login'><BackArrow />Back to Login</Link>
            </P>
          </Wrapper>
        </Content>
      </PageWrapper>
    )
  }
}

export {
  ForgotPassword as default
}
