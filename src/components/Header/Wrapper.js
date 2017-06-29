/**
  * Styled container for Header
  *
  *
  * @namespace Header.Wrapper
  * @memberOf Header
  */

import styled from 'styled-components'

const Wrapper = styled.header`
  position: fixed;
  top: 0px;
  margin-bottom: 0;

  min-height: 64px;
  height: 64px;
  width: 100%;

  background-color: ${props => props.theme.mainBG};
  color: ${props => props.theme.noneWhite};

  @media (max-width: 900px) {
    position: static;

    height: auto;
  }
`

export default Wrapper
