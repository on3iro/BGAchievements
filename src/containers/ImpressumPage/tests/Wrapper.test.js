import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from '../Wrapper'

describe('<Wrapper />', () => {
  it('should render section', () => {
    const wrapper = shallow(<Wrapper />)
    expect(wrapper.find('section').exists()).toMatchSnapshot()
  })
})
