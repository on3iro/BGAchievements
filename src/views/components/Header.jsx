// @flow

import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import NavMain from './NavMain'

const Wrapper = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: flex-start;

  width: 100%;
  height: 60px;
  min-height: 60px;

  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
`

const Header = () => (
  <Wrapper>
    <Logo>BGAchievements</Logo>
    <NavMain />
  </Wrapper>
)

export {
  Header as default
}
