import React from 'react'
import { mount } from 'enzyme'

import Li from '../index'

describe('<Li />', () => {
  it('should render <li />', () => {
    const wrapper = mount(<Li />)
    expect(wrapper.find('li').length).toEqual(1)
  })
})
