import React from 'react'
import { shallow } from 'enzyme'

import Content from '../Content'

describe('<Content />', () => {
  it('Should render main', () => {
    const wrapper = shallow(<Content />)
    expect(wrapper.find('main').length).toMatchSnapshot()
  })
})
