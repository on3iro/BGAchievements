import React from 'react'

import AutoSuggestInput from './AutoSuggestInput'
import StyledInput from './StyledInput'

const Input = props => {
  let input = <StyledInput {...props} />

  if (props.autoSuggest) {
    input = <AutoSuggestInput {...props} />
  }

  return input
}

export default Input
