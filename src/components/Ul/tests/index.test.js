import React from 'react'
import { shallow } from 'enzyme'

import Ul from '../index'

describe('<Ul />', () => {
  it('should render <ul />', () => {
    const wrapper = shallow(<Ul />)
    expect(wrapper.find('ul').length).toBe(1)
  })
})
