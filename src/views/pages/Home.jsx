// @flow

import React from 'react'
import styled from 'styled-components'

import FakeUser from 'views/containers/FakeUser'

import H1 from 'views/components/H1'

const Wrapper = styled.div``

const Home = () => (
  <Wrapper>
    <H1>BGAchievements</H1>
    <FakeUser />
  </Wrapper>
)

export {
  Home as default
}
