import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Logo from '../Logo'

function setUp (newProps) {
  const props = {
    to: '/',
    ...newProps
  }

  const enzymeWrapper = shallow(
    <Logo {...props} />
  )

  return {
    props,
    enzymeWrapper
  }
}

describe('<Logo />', () => {
  it('should render an react-router <Link />', () => {
    const { enzymeWrapper } = setUp()
    expect(enzymeWrapper.find(Link).length).toEqual(1)
  })
})
