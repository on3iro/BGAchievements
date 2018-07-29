// @flow

import * as React from 'react'
import styled from 'styled-components'

import H1 from 'views/components/atoms/H1'

const Wrapper = styled.div``

class Home extends React.PureComponent<Object> {
  render () {
    return (
      <Wrapper>
        <H1>BGAchievements</H1>
      </Wrapper>
    )
  }
}

export {
  Home as default
}
