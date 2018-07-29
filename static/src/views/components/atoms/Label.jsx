// @flow

import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-size: ${props => props.theme.baseFontSize};
  line-height: ${props => props.theme.baseLineHeight};
`

export {
  Label as default
}
