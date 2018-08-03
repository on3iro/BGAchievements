// @flow

import styled from 'styled-components'

const Hint = styled.p`
  margin: 0;
  color: ${props => props.theme.hintColor};
  font-size: 12px;
  line-height: 14px;
  text-align: ${props => props.alignment ? props.alignment : 'left'};
`

export {
  Hint as default
}
