import styled from 'styled-components'

const Span = styled.span`
  display: block;
  margin: ${props => props.error ? '-10px 0 10px 5px' : '0'};
  padding-top: ${props => props.error ? '0' : '5px'}

  color: ${props => props.error ? props.theme.warning : props.theme.outlines};
  font-size: ${props => props.error ? '0.8rem' : 'inherit'};
`

export default Span
