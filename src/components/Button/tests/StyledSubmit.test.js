import React from 'react'
import { mount } from 'enzyme'

import StyledSubmit from '../StyledSubmit'

describe('<StyledSubmit />', () => {
  it('Should render input', () => {
    const wrapper = mount(<StyledSubmit>PasswordGenerator</StyledSubmit>)
    expect(wrapper.find('input').length).toEqual(1)
  })
})
