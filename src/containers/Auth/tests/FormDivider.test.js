import React from 'react'
import { shallow } from 'enzyme'

import FormDivider, {
  Wrapper,
  DividerLine,
  Text
} from '../FormDivider'

describe('<FormDivider />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<FormDivider />)
    expect(wrapper.find(Wrapper).exists()).toBe(true)
  })

  it('should render <DividerLine />', () => {
    const wrapper = shallow(<FormDivider />)
    expect(wrapper.find(DividerLine).length).toBe(2)
  })

  it('should render <Text />', () => {
    const wrapper = shallow(<FormDivider>Hi</FormDivider>)
    expect(wrapper.find(Text).exists()).toBe(true)
  })

  describe('<Wrapper />', () => {
    it('should render <div>', () => {
      const wrapper = shallow(<Wrapper />)
      expect(wrapper.find('div').exists()).toBe(true)
    })
  })

  describe('<DividerLine />', () => {
    it('should render <div>', () => {
      const wrapper = shallow(<DividerLine />)
      expect(wrapper.find('div').exists()).toBe(true)
    })
  })

  describe('<Text />', () => {
    it('should render <p>', () => {
      const wrapper = shallow(<Text />)
      expect(wrapper.find('p').length).toBe(1)
    })
  })
})
