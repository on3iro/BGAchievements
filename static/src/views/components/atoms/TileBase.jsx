// @flow

import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Tile = styled(Link)`
  display: flex;
  padding: ${props => props.theme.buildingUnit * 3}px;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${props => props.theme.tileBackgroundColorHover};
    transition: background 0.2s ease-in-out;
  }
`
export {
  Tile as default
}
