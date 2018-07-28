// @flow

import styled from 'styled-components'

const Input = styled.input`
  display: block;
  border: 1px solid ${props => props.theme.borderColor};
  padding: 0 ${props => props.theme.buildingUnit}px;
  width: 100%;
  height: ${props => (props.theme.buildingUnit * 5)}px;
  border-radius: ${props => (props.theme.buildingUnit * 0.5)}px;

  &:hover {
    background-color: #efefef;
  }

  &:focus {
    background-color: ${props => props.theme.white};
    border-color: ${props => props.theme.primary};
    outline: none;
  }
`

export {
  Input as default
}
