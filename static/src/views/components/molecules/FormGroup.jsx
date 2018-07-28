// @flow

import React from 'react'
import styled from 'styled-components'

import Label from '../atoms/Label'
import Input from '../atoms/Input'

const Wrapper = styled.div`
  margin-bottom: ${props => (props.theme.buildingUnit * 3)}px;
  width: 100%;
`
type Props = {
  id: string,
  type: string,
  label: string
}

const FormGroup = (props: Props) => (
  <Wrapper>
    <Label for={props.id}>{props.label}</Label>
    <Input type={props.type} id={props.id} name={props.id} />
  </Wrapper>
)

export {
  FormGroup as default
}
