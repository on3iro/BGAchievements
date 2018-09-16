import * as React from 'react'
import styled from 'styled-components'

import Button from 'views/components/atoms/Button'
import Form from 'views/components/atoms/Form'
import FormGroup from 'views/components/molecules/FormGroup'

const Wrapper = styled(Form)`
  margin-top: ${props => (props.theme.buildingUnit * 12)}px;
`

const ModalButton = styled(Button)`
  border-radius: 0;
`

const ModalButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    width: 100%;
`

class AddAchievementSetForm extends React.PureComponent {
  render () {
    return (
      <Wrapper>
        <ModalButtonWrapper>
            <ModalButton type='submit'>Cancel</ModalButton>
            <ModalButton type='submit'>Save</ModalButton>
        </ModalButtonWrapper>
      </Wrapper>
    )
  }
}

export {
  AddAchievementSetForm as default
}
