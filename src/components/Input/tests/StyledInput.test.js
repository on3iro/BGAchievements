import React from 'react'
import { shallow } from 'enzyme'

import StyledInput from '../StyledInput'

describe('<StyledInput />', () => {
  it('should render <input />', () => {
    const wrapper = shallow(<StyledInput />)

    expect(wrapper.find('input').exists()).toBe(true)
  })
})
