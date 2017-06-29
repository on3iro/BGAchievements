/**
  * A link to a certain page, represented by an anchor tag.
  *
  * @namespace A
  */

import styled from 'styled-components'

const A = styled.a`
  display: inline;
  color: ${props => props.theme.noneWhite};
  text-decoration: none;
`

export default A
