// @flow

import styled from 'styled-components'

const MenuList = styled.ul`
  position: relative;
  top: ${props => (props.theme.buildingUnit) * 6}px;
  right: ${props => props.theme.buildingUnit}px;
  padding: 0;
  min-width: 160px;
  background: ${props => props.theme.white};
  box-shadow: 0 0 20px ${props => props.theme.boxShadowColor};
  list-style: none;
`

export {
  MenuList as default
}
