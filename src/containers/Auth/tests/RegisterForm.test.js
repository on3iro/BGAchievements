import React from 'react'
import { shallow } from 'enzyme'
import { Field } from 'redux-form'

import H1 from 'components/H1'
import Button from 'components/Button'

import { RegisterForm, validate } from '../RegisterForm'

const renderComponent = newProps => {
  const props = {
    handleSubmit: jest.fn()
  }

  const renderedWrapper = shallow(<RegisterForm {...props} />)

  return {
    props,
    renderedWrapper
  }
}

describe('<RegisterForm />', () => {
  it('should render <form>', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find('form').length).toMatchSnapshot()
  })

  it('should render <H1>', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find(H1).length).toMatchSnapshot()
  })

  it('should render Fields', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find(Field).length).toMatchSnapshot()
  })

  it('Should render <Button />', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find(Button).length).toMatchSnapshot()
  })
})

describe('validate()', () => {
  const values = {
    email: 'foo@bar.com',
    name: 'foo',
    password: '123',
    confirm: '123'
  }

  it('should throw "Required" on empty email', () => {
    expect(validate({ ...values, email: ''})).toMatchSnapshot()
  })

  it('should throw "Invald email address"', () => {
    expect(validate({ ...values, email: 'asdfasdf'})).toMatchSnapshot()
  })

  it('should throw "Required" on empty name', () => {
    expect(validate({ ...values, name: ''})).toMatchSnapshot()
  })

  it('should throw "Required" on password', () => {
    expect(validate({ ...values, password: ''})).toMatchSnapshot()
  })

  it('should throw "Required" on confirm', () => {
    expect(validate({ ...values, confirm: ''})).toMatchSnapshot()
  })

  it('should throw "Passwords do not match"', () => {
    expect(validate({ ...values, confirm: 'abc'})).toMatchSnapshot()
  })
})
