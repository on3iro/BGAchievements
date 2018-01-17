// @flow

import React from 'react'
import type { ChildrenArray, Node } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;

  margin-right: 50px;
  width: 400px;
`

const LogoText = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
`

const Logo = (props: {
  children: ChildrenArray<Node>
}) => (
  <Wrapper>
    <LogoText>{props.children}</LogoText>
  </Wrapper>
)

export {
  Logo as default
}
