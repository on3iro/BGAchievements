// @flow

import styled from 'styled-components'

const P = styled.p`
  line-height: 24px;
  text-align: ${props => props.alignment ? props.alignment : 'left'};
`

export {
  P as default
}
