import React from 'react'
import { shallow } from 'enzyme'
import { Field } from 'redux-form'

import StyledField from '../index'

describe('<StyledField />', () => {
  it('should render redux-form Field', () => {
    const renderedWrapper = shallow(<StyledField
      name='test'
      component={() => <h1>Hi</h1>}
    />)
    expect(renderedWrapper.find(Field).length).toMatchSnapshot()
  })
})
