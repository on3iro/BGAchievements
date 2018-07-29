// @flow

import React from 'react'
import styled from 'styled-components'
import { SearchIcon, MoreVertIcon } from 'mdi-react'

import Title from '../atoms/Title'
import HeaderNavLink from '../atoms/HeaderNavLink'
import HeaderNavList from '../atoms/HeaderNavList'
import HeaderNavListItem from '../atoms/HeaderNavListItem'

const Wrapper = styled.header`
  position: fixed;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${props => (props.theme.buildingUnit * 7)}px;

  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  box-shadow: 0 0 20px ${props => props.theme.boxShadowColor};
`

const HeaderNav = styled.nav`
`

const Header = () => (
  <Wrapper>
    <Title>BGAchievements</Title>
    <HeaderNav>
      <HeaderNavList>
        <HeaderNavListItem>
          <HeaderNavLink><SearchIcon /></HeaderNavLink>
        </HeaderNavListItem>
        <HeaderNavListItem>
          <HeaderNavLink><MoreVertIcon /></HeaderNavLink>
        </HeaderNavListItem>
      </HeaderNavList>
    </HeaderNav>
  </Wrapper>
)

export {
  Header as default
}
