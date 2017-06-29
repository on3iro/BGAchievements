import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from '../Wrapper'
import { GlobalMessage, mapStateToProps } from '../index'

describe('<GlobalMessage />', () => {
  it('should render <Wrapper />', () => {
    const wrapper = shallow(<GlobalMessage />)
    expect(wrapper.find(Wrapper).exists()).toBe(true)
  })

  it('should render <Wrapper /> with empty prop if no error or message is present', () => {
    const wrapper = shallow(<GlobalMessage />)
    expect(wrapper.find(Wrapper).props().empty).toBe(true)
  })

  it('should render <span /> with error', () => {
    const wrapper = shallow(<GlobalMessage error='Error' />)
    expect(wrapper.find('span').exists()).toBe(true)
  })

  it('should render <span /> with message', () => {
    const wrapper = shallow(<GlobalMessage message='Messag' />)
    expect(wrapper.find('span').exists()).toBe(true)
  })

  describe('react-redux', () => {
    it('should map state to props', () => {
      expect(mapStateToProps({
        GlobalMessages: {
          GlobalMessage: 'hi',
          GlobalError: 'Error'
        }
      })).toMatchSnapshot()
    })
  })
})
