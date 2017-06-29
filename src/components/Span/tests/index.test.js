import React from 'react'
import { mount } from 'enzyme'

import Span from '../index'

describe('<Span />', () => {
  it('should render span', () => {
    const renderedWrapper = mount(<Span />)
    expect(renderedWrapper.find('span').length).toMatchSnapshot()
  })
})
