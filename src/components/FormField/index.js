import React from 'react'
import PropTypes from 'prop-types'

import Input from 'components/Input'
import Span from 'components/Span'

const RenderField = ({ input, label, type, meta: { touched, error } }) => {
  return (
    <div>
      <Input
        {...input}
        placeholder={label}
        type={type}
        error={touched && error}
      />
      {touched && error && <Span error={touched && error}>{error}</Span>}
    </div>
  )
}

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object
}

export default RenderField
