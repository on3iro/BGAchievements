/**
  * Renders a Navigation with react-router Links
  *
  * @namespace Navigation
  */

import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from './Wrapper'
import NavBar from './NavBar'
import NavLink from 'components/NavLink'

const Navigation = props => {
  return (
    <Wrapper>
      <NavBar>
        {
          props.isLoggedIn &&
            <NavLink to='/home'>
              Home
            </NavLink>
        }
      </NavBar>
    </Wrapper>
  )
}

Navigation.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default Navigation
