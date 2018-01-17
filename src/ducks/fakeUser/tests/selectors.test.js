import * as selectors from '../selectors'

describe('FakeUser selectors', () => {
  it('Should get fake user', () => {
    expect(selectors.getFakeUser({
      fakeUser: {
        user: {
          id: 'some data'
        }
      }
    })).toMatchSnapshot()
  })

  it('Should get user loading state', () => {
    expect(selectors.getUserLoading({
      fakeUser: {
        loading: true
      }
    })).toMatchSnapshot()
  })
}) // end FakeUser selectors
