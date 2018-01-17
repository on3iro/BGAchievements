// @flow

import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const LinkWithActiveClass = props => (
  <NavLink {...props} activeClassName='selected' />
)

const StyledNavLink = styled(LinkWithActiveClass)`
  display: block;
  padding: 10px;

  color: ${props => props.theme.white};

  cursor: pointer;
  text-decoration: none;

  &.selected {
    background: ${props => props.theme.bgPrimary};
    color: ${props => props.theme.primary};

    &:visited {
      color: ${props => props.theme.primary};
    }
  }

  &:visited {
    color: inherit;
  }
`

export {
  StyledNavLink as default
}
