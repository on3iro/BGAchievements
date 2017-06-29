/**
  * Styled Wrapper for site content
  *
  * @namespace App.Content
  * @memberOf App
  */

import styled from 'styled-components'

const Content = styled.main`
  margin: 10px auto 60px auto;
  padding: 0;
  width: 100%;
  height: 60%;

  @media (max-width: 900px) {
    padding: 20px;
    height: 100%;
  }
`

export default Content
