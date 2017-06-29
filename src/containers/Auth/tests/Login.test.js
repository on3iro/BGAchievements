import React from 'react'
import { shallow } from 'enzyme'

import Button from 'components/Button'

import Wrapper from '../Wrapper'
import { Login, mapStateToProps, mapDispatchToProps } from '../Login'
import LoginForm from '../LoginForm'

const renderComponent = newProps => {
  const props = {
    loginSubmit: jest.fn(),
    ...newProps
  }

  const renderedWrapper = shallow(<Login {...props} />)

  return {
    props,
    renderedWrapper
  }
}

describe('<Login />', () => {
  it('should render <Wrapper />', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find(Wrapper).length).toMatchSnapshot()
  })

  it('should render <LoginForm />', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find(LoginForm).length).toMatchSnapshot()
  })

  it('should render <Button />', () => {
    const { renderedWrapper } = renderComponent()
    expect(renderedWrapper.find(Button).length).toMatchSnapshot()
  })

  it('should call loginSubmit() on handleSubmit', () => {
    const { renderedWrapper, props } = renderComponent()

    renderedWrapper.instance().handleSubmit('test')

    expect(props.loginSubmit).toHaveBeenCalledWith('test')
  })

  describe('react-redux', () => {
    it('should map state to props', () => {
      expect(mapStateToProps({
        auth: { AuthRequestState: { isLoading: true }}
      })).toMatchSnapshot()
    })

    it('should map dispatch to props', () => {
      expect(mapDispatchToProps(() => null)).toMatchSnapshot()
    })
  })
})
