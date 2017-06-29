/**
 * Testing our Button component
 */

import React from 'react'
import { mount, shallow } from 'enzyme'

import Button from '../index'
import StyledNavLink from '../StyledNavLink'

const handleRoute = () => {}
const href = 'http://mxstbr.com'
const children = (<h1>Test</h1>)
const submit = true
const to = '/login'
const renderComponent = (props = {}, shallowRender = false) => {
  if (shallowRender) {
    return shallow(
      <Button {...props}>
        {children}
      </Button>
      )
  }
  return mount(
    <Button {...props}>
      {children}
    </Button>
    )
}

describe('<Button />', () => {
  it('should render an <a> tag if no route is specified', () => {
    const renderedComponent = renderComponent({ href })
    expect(renderedComponent.find('a').length).toEqual(1)
  })

  it('should render a <StyledNavLink /> to change route if the "to" prop is specified', () => {
    const renderedComponent = renderComponent({ to }, true)
    expect(renderedComponent.find(StyledNavLink).length).toEqual(1)
  })

  it('should render a <input type=submit> if submit prop is specified', () => {
    const wrapper = renderComponent({ submit })
    expect(wrapper.find('input').length).toEqual(1)
  })

  it('should have children', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.contains(children)).toEqual(true)
  })

  it('should handle click events', () => {
    const onClickSpy = jest.fn()
    const renderedComponent = renderComponent({ onClick: onClickSpy })
    renderedComponent.find('a').simulate('click')
    expect(onClickSpy).toHaveBeenCalled()
  })

  it('should have a className attribute', () => {
    const renderedComponent = renderComponent()
    expect(renderedComponent.find('a').prop('className')).toBeDefined()
  })
})
