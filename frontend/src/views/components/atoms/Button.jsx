// @flow

import styled from 'styled-components'

const Button = styled.button`
  margin-top: ${props => (props.theme.buildingUnit * 2)}px;
  border: 1px solid transparent;
  padding: 0 ${props => (props.theme.buildingUnit * 2)}px;
  width: 100%;
  height: ${props => (props.theme.buildingUnit * 5)}px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  line-height: ${props => (props.theme.buildingUnit * 5)}px;
  border-radius: ${props => (props.theme.buildingUnit * 0.5)}px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background: ${props => props.theme.primaryHover};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
`

export {
  Button as default
}
