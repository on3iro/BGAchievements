// @flow

import styled from 'styled-components'

const MenuButton = styled.button`
  position: absolute;
  top: ${props => props.theme.buildingUnit}px;
  right: ${props => props.theme.buildingUnit}px;
  width: ${props => (props.theme.buildingUnit) * 6}px;
  height: ${props => (props.theme.buildingUnit) * 6}px;
  background: transparent;
  appearance: none;
  border-radius: 100%;
`

export {
  MenuButton as default
}
