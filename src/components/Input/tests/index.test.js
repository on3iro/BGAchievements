import React from 'react'
import { shallow } from 'enzyme'

import Input from '../index'
import StyledInput from '../StyledInput'
import AutoSuggestInput from '../AutoSuggestInput'

describe('<Input />', () => {
  it('should render <StyledInput /> as default', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper.find(StyledInput).exists()).toEqual(true)
  })

  it('should render <AutoSuggestInput /> if prop is set', () => {
    const wrapper = shallow(<Input autoSuggest />)

    expect(wrapper.find(AutoSuggestInput).exists()).toBe(true)
  })
})
