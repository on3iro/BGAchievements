import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'

import { Auth, mapStateToProps } from '../index'
import Login from '../Login'

const renderWrapper = newProps => {
  const props = {
    isLoggedIn: false,
    location: {
      state: 'test'
    },
    ...newProps
  }

  const renderedWrapper = shallow(<Auth {...props} />)

  return {
    props,
    renderedWrapper
  }
}

describe('<Auth />', () => {
  it('should render <Login />', () => {
    const { renderedWrapper } = renderWrapper()
    expect(renderedWrapper.find(Login).length).toEqual(1)
  })

  it('should render <Redirect /> when user is logged in', () => {
    const { renderedWrapper } = renderWrapper({isLoggedIn: true})
    expect(renderedWrapper.find(Redirect).length).toBe(1)
  })

  describe('react-redux', () => {
    it('should map state to props', () => {
      expect(mapStateToProps({
        auth: { user: { isLoggedIn: true }}
      })).toMatchSnapshot()
    })
  })
})
