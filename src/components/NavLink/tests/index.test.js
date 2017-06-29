import React from 'react'
import { shallow } from 'enzyme'

import NavLink, { Li, RestyledLink } from '../index'

describe('<NavLink />', () => {
  it('should render styled.li', () => {
    const renderedWrapper = shallow(<NavLink to='/'>PasswordGenerator</NavLink>)
    expect(renderedWrapper.find(Li).length).toMatchSnapshot()
  })

  it('should render <RestyledLink />', () => {
    const renderedWrapper = shallow(<NavLink to='/'>PasswordGenerator</NavLink>)
    expect(renderedWrapper.find(RestyledLink).length).toMatchSnapshot()
  })
})
