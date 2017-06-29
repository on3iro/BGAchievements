import React from 'react'
import { shallow } from 'enzyme'

import Img from 'components/Img'

import SpinnerImg from '../SpinnerImg'

describe('<SpinnerImg />', () => {
  it('should render <Img />', () => {
    const wrapper = shallow(<SpinnerImg src='' alt='' />)

    expect(wrapper.find(Img).exists()).toBe(true)
  })
})
