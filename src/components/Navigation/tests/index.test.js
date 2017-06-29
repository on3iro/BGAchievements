import React from 'react'
import { shallow } from 'enzyme'

import Navigation from '../index'
import NavBar from '../NavBar'
import NavLink from 'components/NavLink'

describe('<Navigation />', () => {
  it('Should render NavBar', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper.find(NavBar).length).toMatchSnapshot()
  })

  it('Should render NavLinks', () => {
    const wrapper = shallow(<Navigation />)
    expect(wrapper.find(NavLink).length).toMatchSnapshot()
  })
})
