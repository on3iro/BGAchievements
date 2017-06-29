import React from 'react'
import { shallow } from 'enzyme'

import Header from '../index'
import Logo from '../Logo'
import Wrapper from '../Wrapper'
import Navigation from 'components/Navigation'

describe('<Header />', () => {
  it('should render a Wrapper', () => {
    const renderedComponent = shallow(<Header />)
    expect(renderedComponent.find(Wrapper).length).toMatchSnapshot()
  })

  it('Should render an <Logo />', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find(Logo).length).toMatchSnapshot()
  })

  it('Should render a <Navigation />', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find(Navigation).length).toMatchSnapshot()
  })
})
