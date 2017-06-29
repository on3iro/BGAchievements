import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import StyledLink, { LinkWrapper } from '../index'

describe('<StyledLink />', () => {
  it('should render <LinkWrapper />', () => {
    const wrapper = shallow(<StyledLink to='/' />)
    expect(wrapper.find(LinkWrapper).length).toMatchSnapshot()
  })

  describe('<LinkWrapper />', () => {
    it('should render <Link />', () => {
      const wrapper = shallow(<LinkWrapper to='/' />)

      expect(wrapper.find(Link).exists()).toBe(true)
    })
  })
})
