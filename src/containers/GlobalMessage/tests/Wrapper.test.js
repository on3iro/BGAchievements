import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from '../Wrapper'

describe('<Wrapper />', () => {
  it('should render <div>', () => {
    const wrapper = shallow(<Wrapper />)

    expect(wrapper.find('div').exists()).toBe(true)
  })
})
