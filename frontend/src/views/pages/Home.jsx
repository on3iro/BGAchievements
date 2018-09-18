// @flow

import * as React from 'react'
import styled from 'styled-components'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import H1 from 'views/components/atoms/H1'

import Header from 'views/components/organisms/Header'

const Wrapper = styled.div``

class Home extends React.PureComponent<Object> {
  render () {
    return (
      <PageWrapper>
        <Header title='BGAchievements' navVisible />
        <Content>
          <Wrapper>
            <H1>BGAchievements</H1>
          </Wrapper>
        </Content>
      </PageWrapper>
    )
  }
}

export {
  Home as default
}
