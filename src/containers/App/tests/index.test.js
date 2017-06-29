import React from 'react'
import { shallow } from 'enzyme'

import { App, mapStateToProps } from '../index'
import Content from '../Content'
import Header from 'components/Header'
import Footer from 'components/Footer'

describe('App', () => {
  it('Should render a <Header />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Header).length).toEqual(1)
  })

  it('Should render a <Footer />', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(Footer).length).toEqual(1)
  })

  describe('react-redux', () => {
    it('should map state to props', () => {
      expect(mapStateToProps({
        auth: { user: { isLoggedIn: true }},
        router: { location: { pathname: '/login' }}
      })).toMatchSnapshot()
    })
  })
})
