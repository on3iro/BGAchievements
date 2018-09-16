import * as React from 'react'
import styled from 'styled-components'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import H1 from 'views/components/atoms/H1'
import Button from 'views/components/atoms/Button'
import FormGroup from 'views/components/molecules/FormGroup'
import P from 'views/components/atoms/P'
import Input from 'views/components/atoms/Input'
import { FilterOutlineIcon } from 'mdi-react'

const Wrapper = styled.div`
  padding: 16px 16px 0;

  .mdi-icon {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`

const Search = styled.div`
  position: relative;
`

const SearchInput = styled(Input)`
  padding-right: 32px;
  margin-bottom: 24px;
`

const SuggestionList = styled.div`
    padding: 8px;
    height: 240px;
    overflow: auto;
    border: 1px solid ${props => props.theme.inputBorderColor};
    border-radius: ${props => (props.theme.buildingUnit * 0.5)}px;
    display: block;
`

const ContentModal = styled(Content)`
  padding: 0;
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

const AchievementSetList = styled.div``
const AchievementSetListItem = styled.div`
    display: block;
    margin-bottom: 8px;
`
const Checkbox = styled.input``

const CheckboxLabel = styled.label`
    padding-left: 16px;
    vertical-align: middle;
`

class AddAchievementSet extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      achievements: [
        {
          id: 1,
          name: 'Achievement One'
        },
        {
          id: 2,
          name: 'Achievement Twooo'
        }
      ],
      inputValue: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const inputValue = event.target.value
    this.setState({ inputValue })
  }


  render () {
    return (
      <PageWrapper>
        <ContentModal>
          <Wrapper>
            <H1>Add Achievement Set</H1>
            <FormGroup id='SetName' type='text' label='Setname' />
            <Search>
                <SearchInput type='input' id='bla' name='bla' onChange={this.handleInputChange} value={this.state.inputValue} />
                <FilterOutlineIcon />
                <SuggestionList>
                  <AchievementSetList>
                    { this.state.achievements
                      .filter(achievement => achievement.name.includes(this.state.inputValue) )
                      .map(achievement => {
                        return (
                          <AchievementSetListItem key={achievement.id}>
                            <Checkbox id={achievement.id} type="checkbox"/>
                            <CheckboxLabel htmlFor={achievement.id}>{achievement.name}</CheckboxLabel>
                        </AchievementSetListItem>
                      )
                    }) }
                  </AchievementSetList>
                </SuggestionList>
            </Search>
            <P alignment='left'>Achievements in Set: { this.state.achievements.length }</P>
          </Wrapper>
          <ModalButtonWrapper>
            <ModalButton type='submit'>Cancel</ModalButton>
            <ModalButton type='submit'>Save</ModalButton>
          </ModalButtonWrapper>
        </ContentModal>
      </PageWrapper>
    )
  }
}

export {
  AddAchievementSet as default
}
