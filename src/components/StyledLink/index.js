/**
 * A simple styled react-router Link element.
  */
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkWrapper = props => {
  // Pulls off secondary prop to avoid react-unknown-prop warning on underlying <a/>
  const { secondary, ...rest } = props

  return <Link {...rest} />
}

const StyledLink = styled(LinkWrapper)`
  display: inline-block;
  text-decoration: none;
  color: ${props => props.secondary ? props.theme.main : props.theme.noneWhite};
  cursor: pointer;
  outline: 0;

  &:visited {
    color: ${props => props.secondary ? props.theme.lightText : props.theme.noneWhite};
  }

  &:hover {
    color: ${props => props.secondary ? props.theme.simple : props.theme.noneWhite};
  }
`

export default StyledLink
