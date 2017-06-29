import React from 'react'
import { shallow } from 'enzyme'

import NavBar from '../NavBar'

describe('<NavBar', () => {
  it('Should render ul', () => {
    const wrapper = shallow(<NavBar />)
    expect(wrapper.find('ul').length).toEqual(1)
  })
})
