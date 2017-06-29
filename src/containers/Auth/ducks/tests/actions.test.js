import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to submit login', () => {
    expect(actions.loginSubmit('test')).toMatchSnapshot()
  })

  it('should create an action to logout', () => {
    expect(actions.logout()).toMatchSnapshot()
  })

  it('should create an action to submit registration', () => {
    expect(actions.registerSubmit('test')).toMatchSnapshot()
  })
})
