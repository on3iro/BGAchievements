// @flow

import styled from 'styled-components'

const HeaderNavLink = styled.a`
  display: block;
  padding: 0 ${props => (props.theme.buildingUnit * 2)}px;

  color: ${props => props.theme.white};
  line-height: 56px;

  &:hover {
    background: ${props => props.theme.primaryHover};
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
`

export {
  HeaderNavLink as default
}
