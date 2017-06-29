import React from 'react'

import spinnerRing from 'img/spinner_ring.gif'

import Wrapper from './Wrapper'
import SpinnerImg from './SpinnerImg'

const LoadingSpinner = props => {
  return (
    <Wrapper>
      <SpinnerImg {...props} src={spinnerRing} alt='loading' />
    </Wrapper>
  )
}

export default LoadingSpinner
