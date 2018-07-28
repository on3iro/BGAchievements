// @flow

import styled from 'styled-components'

const Title = styled.h1`
  margin: 0;
  padding-left: ${props => (props.theme.buildingUnit * 3)}px;
  font-weight: bold;
  font-size: 16px;
`

export {
  Title as default
}
