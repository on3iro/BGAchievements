// @flow

import styled from 'styled-components'

const P = styled.p`
  margin: ${props => props.theme.buildingUnit}px 0;
  font-size: ${props => props.size ? props.size : props.theme.baseFontSize};
  line-height: ${props => props.theme.baseLineHeight};
  text-align: ${props => props.alignment ? props.alignment : 'left'};
`

export {
  P as default
}
