import * as actions from '../actions'

describe('FakeUser actionCreators', () => {
  it('Should create action to init fakeUser', () => {
    expect(actions.init())
      .toMatchSnapshot()
  })

  // TODO test for fetchUser (needs dependency injection)
  it('Should create action to fetch fakeUser')

  it('Should create action on fetch success', () => {
    expect(actions.userFetchSuccessfulAction({
      data: {
        name: 'User data...'
      }
    })).toMatchSnapshot()
  })

  it('Should create action on fetch fail', () => {
    expect(actions.userFetchFailedAction({ err: 'err' }))
      .toMatchSnapshot()
  })
}) // end actionCreators
