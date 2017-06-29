import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: -5px 0 10px 0;
  width: 100%;
`
export const DividerLine = styled.div`
  display: inline-block;
  margin: 0;
  padding-top: 8px;
  width: 25%;
  height: 1px;

  border-bottom: 2px solid ${props => props.theme.simple};
`
export const Text = styled.p`
  flex-grow: 2;
  margin: 0;
  width: 150px;

  color: ${props => props.theme.main};
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
`

const FormDivider = props => {
  return (
    <Wrapper>
      <DividerLine />
      <Text>{props.children}</Text>
      <DividerLine />
    </Wrapper>
  )
}

FormDivider.propTypes = {
  children: PropTypes.node
}

export default FormDivider
