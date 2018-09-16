// @flow

import styled from 'styled-components'

const Menu = styled.div`
  position: absolute;
  top: ${props => props.theme.buildingUnit}px;
  right: ${props => props.theme.buildingUnit}px;
`

export {
  Menu as default
}
