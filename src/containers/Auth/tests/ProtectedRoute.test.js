import React from 'react'
import { mount } from 'enzyme'
import { Redirect, MemoryRouter } from 'react-router-dom'

import { ProtectedRoute, mapStateToProps } from '../ProtectedRoute'

const renderComponent = newProps => {
  const TestComponent = () => {
    return (
      <div>test</div>
    )
  }
  const props = {
    component: TestComponent,
    isLoggedIn: true,
    ...newProps
  }

  const renderedWrapper = mount(
    <MemoryRouter>
      <ProtectedRoute {...props} />
    </MemoryRouter>
  )

  return {
    props,
    renderedWrapper,
    TestComponent
  }
}

describe('<ProtectedRoute />', () => {
  it('should render specified component', () => {
    const { renderedWrapper, TestComponent } = renderComponent()
    expect(renderedWrapper.find(TestComponent).length).toMatchSnapshot()
  })

  it('should render Redirect to "/login" if user is logged out', () => {
    const { renderedWrapper } = renderComponent({ isLoggedIn: false })
    const redirect = renderedWrapper.find(Redirect)

    expect(redirect.length).toMatchSnapshot()
    expect(redirect.props().to.pathname).toMatchSnapshot()
  })

  describe('react-redux', () => {
    it('should map state to props', () => {
      expect(mapStateToProps({
        auth: { user: { isLoggedIn: true }}
      })).toMatchSnapshot()
    })
  })
})
