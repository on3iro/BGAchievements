// @flow

import styled from 'styled-components'

const Input = styled.input`
  display: block;
  border: 1px solid ${props => props.theme.inputBorderColor};
  padding: 0 ${props => props.theme.buildingUnit}px;
  width: 100%;
  height: ${props => (props.theme.buildingUnit * 5)}px;
  border-radius: ${props => (props.theme.buildingUnit * 0.5)}px;

  &:hover {
    background-color: ${props => props.theme.inputBackgrounColorHover};
  }

  &:focus {
    background-color: ${props => props.theme.inputBackgrounColor};
    border-color: ${props => props.theme.inputBorderColorFocus};
    outline: none;
  }

  &:disabled {
    background-color: ${props => props.theme.inputBackgroundColorDisabled};
    cursor: not-allowed;
  }
`

export {
  Input as default
}
