/**
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route.
 * Otherwise it'll render a link with an onclick.
 *
 * @namespace Button
  */

import React, { Children } from 'react'
import PropTypes from 'prop-types'

import A from './A'
import StyledSubmit from './StyledSubmit'
import StyledNavLink from './StyledNavLink'

const Button = props => {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick} {...props} >
      {Children.toArray(props.children)}
    </A>
  )

  // If the button has a 'to' prop, we want to render a NavLink
  if (props.to) {
    button = (
      <StyledNavLink {...props} >
        {Children.toArray(props.children)}
      </StyledNavLink>
    )
  }

  // If the button has submit prop render input
  if (props.submit) {
    button = (
      <StyledSubmit {...props} />
    )
  }

  return button
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  submit: PropTypes.bool
}

export default Button
