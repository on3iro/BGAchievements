// @flow

import styled from 'styled-components'

const TileListItem = styled.li`
  position: relative;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`

export {
  TileListItem as default
}
