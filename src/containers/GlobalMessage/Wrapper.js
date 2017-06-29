import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 80px 0 0 0;
  padding: 10px 20px;
  height: 40px;

  border-radius: 4px;

  background: ${props => props.error ? props.theme.warningHover : props.theme.primaryHover};
  opacity: ${props => props.empty ? '0' : '.6'};
  color: #fff;
`

export default Wrapper
