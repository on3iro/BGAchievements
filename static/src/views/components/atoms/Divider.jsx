// @flow

import styled from 'styled-components'

const Divider = styled.hr`
  margin: ${props => (props.theme.buildingUnit * 4)}px 0;
  border: 0;
  height: 1px;
  background: ${props => props.theme.borderColor};
`

export {
  Divider as default
}
