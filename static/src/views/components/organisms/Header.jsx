// @flow

import * as React from 'react'
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
  display: ${props => props.isVisible ? 'block' : 'none'};
`

class Header extends React.PureComponent<Object> {
  render () {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <HeaderNav isVisible={!!this.props.navVisible}>
          <HeaderNavList>
            <HeaderNavListItem>
              <HeaderNavLink tabIndex='0'><SearchIcon /></HeaderNavLink>
            </HeaderNavListItem>
            <HeaderNavListItem>
              <HeaderNavLink tabIndex='0'><MoreVertIcon /></HeaderNavLink>
            </HeaderNavListItem>
          </HeaderNavList>
        </HeaderNav>
      </Wrapper>
    )
  }
}

export {
  Header as default
}
