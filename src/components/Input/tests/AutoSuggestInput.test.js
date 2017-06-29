import React from 'react'
import { shallow } from 'enzyme'
import Autosuggest from 'react-autosuggest'

import AutoSuggestInput, { Wrapper } from '../AutoSuggestInput'

const props = {
  suggestions: [{}],
  onSuggestionsFetchRequested: () => null,
  onSuggestionsClearRequested: () => null,
  getSuggestionValue: () => null,
  renderSuggestion: () => null,
  inputProps: { value: '', onChange: () => null }
}

describe('<AutosuggestInput />', () => {
  it('should render <Autosuggest />', () => {
    const wrapper = shallow(<AutoSuggestInput {...props} />)
    expect(wrapper.find(Autosuggest).exists()).toBe(true)
  })

  it('should render <Wrapper />', () => {
    const wrapper = shallow(<AutoSuggestInput {...props} />)
    expect(wrapper.find(Wrapper).exists()).toBe(true)
  })
})
