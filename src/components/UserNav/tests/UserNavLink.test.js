import React from 'react'
import { shallow } from 'enzyme'

import NavLink from 'components/NavLink'

import UserNavLink from '../UserNavLink'

describe('<UserNavLink />', () => {
  it('should render <NavLink />', () => {
    const enzymeWrapper = shallow(<UserNavLink to='/'>PasswordGenerator</UserNavLink>)
    expect(enzymeWrapper.find(NavLink).length).toBe(1)
  })
})
