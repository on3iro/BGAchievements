import styled from 'styled-components'
import { Field } from 'redux-form'

const StyledField = styled(Field)`
  display: block;
  margin: 0 0 10px 0;
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.mercury};
  border-radius: 4px;
  color:${props => props.theme.text};
  outline: 0;
`

export default StyledField
