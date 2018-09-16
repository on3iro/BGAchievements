// @flow

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MenuListLink = styled(Link)`
  display: block;
  padding: ${props => props.theme.buildingUnit}px ${props => (props.theme.buildingUnit) * 2}px;
  color: ${props => props.theme.textColor};
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.tileBackgroundColorHover};
  }
`

export {
  MenuListLink as default
}
