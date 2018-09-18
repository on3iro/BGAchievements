// @flow

import * as React from 'react'
import styled from 'styled-components'

import Label from 'views/components/atoms/Label'
import Input from 'views/components/atoms/Input'

const Wrapper = styled.div`
  margin-bottom: ${props => (props.theme.buildingUnit * 3)}px;
  width: 100%;
`

type Props = {
  id: string,
  type: string,
  label: string
}

class FormGroup extends React.PureComponent<Props> {
  render () {
    const { id, label, type, ...rest } = this.props

    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input type={type} id={id} name={id} {...rest} />
      </Wrapper>
    )
  }
}

export {
  FormGroup as default
}
