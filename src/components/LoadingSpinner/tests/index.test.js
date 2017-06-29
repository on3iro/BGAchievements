import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from '../Wrapper'
import SpinnerImg from '../SpinnerImg'
import LoadingSpinner from '../index'

describe('<LoadingSpinner />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<LoadingSpinner />)

    expect(wrapper.find(Wrapper).exists()).toBe(true)
  })

  it('should render <SpinnerImg />', () => {
    const wrapper = shallow(<LoadingSpinner />)

    expect(wrapper.find(SpinnerImg).exists()).toBe(true)
  })
})
