/**
  * Renders a single NavLink item containing an li and a preformatted react-router Link
  *
  * @namespace Navigation.NavLink
  * @memberOf Navigation
  */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { surpressNoUsedVarsLinterError } from 'shared/helperFunctions'

export const Li = styled.li`
  display: inline-block;
  height: 100%;

  text-align: center;

  &:hover a {
    color: ${props => props.theme.main};
  }

  @media (max-width: 900px) {
    display: block;
  }
`

export const RestyledLink = styled(NavLink)`
  display: inline-block;
  height: 100%;
  padding: 5px 25px;

  color: ${props => props.theme.noneWhite};
  font-size: 1.4rem;
  font-family: ${props => props.theme.primaryFont};
  text-decoration: none;

  outline: 0;

  &.active {
    color: ${props => props.theme.main};
  }
`

const StyledNavLink = props => {
  // pull props off to avoid react-unknown-prop error
  const { icon, iconHover, secondary, ...rest } = props
  surpressNoUsedVarsLinterError({ icon, iconHover, secondary })

  return (
    <Li>
      <RestyledLink
        {...rest}
      >
        {props.children}
      </RestyledLink>
    </Li>
  )
}

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  icon: PropTypes.string,
  iconHover: PropTypes.string,
  secondary: PropTypes.bool
}

export default StyledNavLink
