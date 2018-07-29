// @flow

import styled from 'styled-components'

const Input = styled.input`
  display: block;
  border: 1px solid ${props => props.theme.inputBorderColor};
  padding: 0 ${props => props.theme.buildingUnit}px;
  width: 100%;
  height: ${props => (props.theme.buildingUnit * 5)}px;
  border-radius: ${props => (props.theme.buildingUnit * 0.5)}px;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.inputBackgroundColorHover};
    transition: background-color 0.2s ease-in-out;
  }

  &:focus {
    background-color: ${props => props.theme.inputBackgroundColor};
    border-color: ${props => props.theme.inputBorderColorFocus};
    outline: none;
    transition: border-color 0.2s ease-in-out;
  }

  &:disabled {
    background-color: ${props => props.theme.inputBackgroundColorDisabled};
    cursor: not-allowed;
  }
`

export {
  Input as default
}
