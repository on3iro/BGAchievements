import React from 'react'
import { shallow } from 'enzyme'

import { NavLink } from 'react-router-dom'

import StyledNavLink, { NavLinkWrapper } from '../StyledNavLink'

describe('<StyledNavLink />', () => {
  it('should render <NavLinkWrapper />', () => {
    const enzymeWrapper = shallow(<StyledNavLink />)

    expect(enzymeWrapper.find(NavLinkWrapper).exists()).toBe(true)
  })

  describe('<NavLinkWrapper />', () => {
    it('should render <NavLink />', () => {
      const enzymeWrapper = shallow(<NavLinkWrapper to='/login' />)

      expect(enzymeWrapper.find(NavLink).exists()).toBe(true)
    })
  })
})
