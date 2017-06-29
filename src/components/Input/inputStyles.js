import { css } from 'styled-components'

const inputStyles = css`
  display: block;
  margin: 0 0 15px 0;
  padding: 5px 10px;
  width: 100%;
  height: 35px;

  border: 1px solid ${props => props.error ? props.theme.warning : props.theme.outlines};
  border-radius: 1px;
  background: ${props => props.theme.noneWhite};
  color: ${props => props.theme.text};

  outline: 0;

  &:placeholder-shown,
  &:-ms-input-placeholder {
    color: ${props => props.theme.outlines};
  }
`

export default inputStyles
