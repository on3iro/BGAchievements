/**
  * Renders a container NavBar for the Navigation
  *
  * @namespace Navigation.NavBar
  * @memberOf Navigation
  */

import styled from 'styled-components'

export default styled.ul`
  margin-top: 13px;
  margin-right: 80px;
  padding: 0;
  height: 100%;

  text-align: center;
  list-style-type: none;

  li {
    &:last-of-type {
      margin-right: 0;
    }
  }
`
