// @flow

import React from 'react'
import styled from 'styled-components'

import Ul from '../Ul'
import NavLink from './NavLink'

const Wrapper = styled.div`
  position: relative;

  width: 50%;
`

const ExtendedUl = styled(Ul)`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0;
`

const Li = styled.li`
  margin-right: 20px;
`

const NavMain = () => (
  <Wrapper>
    <ExtendedUl>
      <Li><NavLink to='/home'>Home</NavLink></Li>
    </ExtendedUl>
  </Wrapper>
)

export {
  NavMain as default
}
