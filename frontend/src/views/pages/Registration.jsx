// @flow

import * as React from 'react'
import styled from 'styled-components'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import P from 'views/components/atoms/P'
import Link from 'views/components/atoms/Link'
import Divider from 'views/components/atoms/Divider'

import Header from 'views/components/organisms/Header'
import RegistrationForm from 'views/components/organisms/RegistrationForm'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => (props.theme.buildingUnit * 54)}px;
`

class Registration extends React.PureComponent<Object> {
  render () {
    return (
      <PageWrapper>
        <Header title='BGAchievements' />
        <Content>
          <Wrapper>
            <RegistrationForm />
            <Divider />
            <P alignment='center'>
              You already have an account?<br />
              <Link to='/login'>Login here</Link>
            </P>
          </Wrapper>
        </Content>
      </PageWrapper>
    )
  }
}

export {
  Registration as default
}
