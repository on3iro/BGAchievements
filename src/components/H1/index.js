/**
  * Renders a styled h1
  *
  * @namespace H1
  */

import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 1.9rem;
  margin-top: 0;
  margin-bottom: 2%;

  color: ${props => props.theme.main};
`

export default H1
