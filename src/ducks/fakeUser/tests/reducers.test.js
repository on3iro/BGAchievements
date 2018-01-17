import * as reducers from '../reducers'
import * as constants from '../constants'

describe('FakeUser reducers', () => {
  describe('fakeUserReducer', () => {
    it('Should handle INIT', () => {
      expect(reducers.fakeUserReducer(undefined, {
        type: constants.INIT
      })).toMatchSnapshot()
    })

    it('Should handle USER_FETCH_SUCCESS', () => {
      expect(reducers.fakeUserReducer(undefined, {
        type: constants.USER_FETCH_SUCCESS,
        payload: 'dummyUser'
      })).toMatchSnapshot()
    })

    it('Should handle USER_FETCH_FAIL', () => {
      expect(reducers.fakeUserReducer(undefined, {
        type: constants.USER_FETCH_FAIL,
        payload: 'dummyError'
      })).toMatchSnapshot()
    })
  }) // end fakeUserReducer
})
