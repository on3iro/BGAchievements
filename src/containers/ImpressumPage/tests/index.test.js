import React from 'react'
import { shallow } from 'enzyme'

import Impressum from '../index'
import Wrapper from '../Wrapper'

describe('Impressum', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<Impressum />)
    expect(wrapper.find(Wrapper).length).toEqual(1)
    expect(wrapper.contains(<h1>Impressum</h1>)).toEqual(true)
  })
})
