/**
 * A single accordion entry. Should receive a handleExpand function as props
 * which in turn is called whenever the user clicks on the entry question.
  */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 20px;
  border: 1px solid #e3e3e3;
`

export const Question = styled.p`
  background-color: #e3e3e3;
  margin: 0;
  padding: 10px;
  cursor: pointer;
`

export const Answer = styled.div`
  margin: 0;
  padding: 10px;
`

const Entry = ({ handleExpand, expanded = false, question, answer }) => {
  return (
    <Wrapper>
      <Question onClick={handleExpand}>{question}</Question>
      {
        expanded &&
        <Answer>{answer()}</Answer>
      }
    </Wrapper>
  )
}

Entry.propTypes = {
  handleExpand: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.func.isRequired,
  expanded: PropTypes.bool
}

export default Entry
