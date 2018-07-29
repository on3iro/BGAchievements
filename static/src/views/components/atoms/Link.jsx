// @flow

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
  margin-top: ${props => (props.theme.buildingUnit * 2)}px;
  border-bottom: 1px solid transparent;
  color: ${props => props.theme.primary};
  text-decoration: none;
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-bottom-color: ${props => props.theme.primary};
    cursor: pointer;
    transition: border-color 0.2s ease-in-out;
  }
`

export {
  StyledLink as default
}
