/**
 * Tests for the <A> component
  */

import React from 'react'
import { shallow } from 'enzyme'

import A from '../index'

// Set up
const href = 'http://google.com'
const children = (<h1>Test</h1>)
const renderComponent = (props = {}) => shallow(
  <A href={href} {...props} >
    {children}
  </A>
)

describe('<A />', () => {
  it('Should render an <a> tag', () => {
    const wrapper = renderComponent()
    expect(wrapper.type()).toEqual('a')
  })

  it('Should render an href attribute', () => {
    const wrapper = renderComponent()
    expect(wrapper.prop('href')).toEqual(href)
  })

  it('Should have children', () => {
    const wrapper = renderComponent()
    expect(wrapper.contains(children)).toEqual(true)
  })

  it('Should have a className attribute', () => {
    const className = 'test'
    const wrapper = renderComponent({ className })
    expect(wrapper.find('a').hasClass(className)).toEqual(true)
  })

  it('Should adopt a target attribute', () => {
    const target = '_blank'
    const wrapper = renderComponent({ target })
    expect(wrapper.prop('target')).toEqual(target)
  })

  it('Should adopt a type attribute', () => {
    const type = 'text/html'
    const wrapper = renderComponent({ type })
    expect(wrapper.prop('type')).toEqual(type)
  })
})
