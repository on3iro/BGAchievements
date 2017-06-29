import React from 'react'
import Autosuggest from 'react-autosuggest'
import styled from 'styled-components'

import inputStyles from './inputStyles'

export const Wrapper = styled.div`
  .react-autosuggest__container {
    position: relative;

    ul {
      margin: 20px 0 0 0 ;
      padding: 0;
    }
  }

  .react-autosuggest__input {
    ${inputStyles}
  }

  .react-autosuggest__suggestions-container {
    position: absolute;
    top: 34px;
    z-index: 10;
    overflow: auto;

    width: 100%;

    background: ${props => props.theme.noneWhite};

    border: 1px solid ${props => props.theme.outlines};
    border-top: none;
  }

  .react-autosuggest__suggestion {
    margin: 0;
    padding: 10px;
  }

  .react-autosuggest__suggestion--highlighted {
    background: ${props => props.theme.outlines};
  }
`

const AutosuggestInput = props => {
  return (
    <Wrapper>
      <Autosuggest {...props} />
    </Wrapper>
  )
}

export default AutosuggestInput
