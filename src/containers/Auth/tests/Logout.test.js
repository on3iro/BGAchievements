import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'

import { Logout, mapStateToProps, mapDispatchToProps } from '../Logout'

const renderComponent = newProps => {
  const props = {
    isLoggedIn: false,
    logout: jest.fn(),
    ...newProps
  }

  const renderedWrapper = shallow(<Logout {...props} />)

  return {
    props,
    renderedWrapper
  }
}

describe('<Logout />', () => {
  it('should render <Redirect /> if user is not logged in', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find(Redirect).length).toMatchSnapshot()
  })

  it('should return null if user is logged in', () => {
    const { renderedWrapper } = renderComponent({isLoggedIn: true})
    expect(renderedWrapper.type()).toMatchSnapshot()
  })

  it('should call logout() if user is logged in', () => {
    const { renderedWrapper, props } = renderComponent({isLoggedIn: true})
    expect(props.logout).toHaveBeenCalled()
  })

  describe('react-redux', () => {
    it('should map state to props', () => {
      expect(mapStateToProps({
        auth: { user: { isLoggedIn: true }}
      })).toMatchSnapshot()
    })
  })

  it('should map dispatch to props', () => {
    expect(mapDispatchToProps(() => null)).toMatchSnapshot()
  })
})
