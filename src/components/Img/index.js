/**
  * Renders an image enforcing the usage of an alt tag
  *
  * @namespace Img
  */

import React from 'react'
import PropTypes from 'prop-types'

const Img = props => {
  return (
    <img className={props.className} src={props.src} alt={props.alt} />
  )
}

Img.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Img
