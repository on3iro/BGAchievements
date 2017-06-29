import * as reducers from '../reducers'
import * as types from '../actionTypes'

describe('authReducer', () => {
  describe('userReducer', () => {
    it('should return initial state', () => {
      expect(reducers.user(undefined, {})).toMatchSnapshot()
    })

    it('should handle LOGIN_SUCCESS', () => {
      expect(reducers.user(undefined, {
        type: types.LOGIN_SUCCESS,
        payload: {
          token: 'testtoken',
          user: 'testuser'
        }
      })).toMatchSnapshot()
    })

    it('should handle REGISTER_SUCCESS', () => {
      expect(reducers.user(undefined, {
        type: types.REGISTER_SUCCESS
      })).toMatchSnapshot()
    })

    it('should handle REGISTER_ERROR', () => {
      expect(reducers.user(undefined, {
        type: types.REGISTER_ERROR,
        payload: 'register-error'
      })).toMatchSnapshot()
    })

    it('should handle LOGIN_ERROR', () => {
      expect(reducers.user(undefined, {
        type: types.LOGIN_ERROR,
        payload: 'login-error'
      })).toMatchSnapshot()
    })

    it('should handle LOGOUT', () => {
      expect(reducers.user({
        user: {
          isLoggedIn: true,
          token: 'testoken'
        }
      }, {
        type: types.LOGOUT
      })).toMatchSnapshot()
    })
  })

  describe('AuthRequestStateReducer', () => {
    it('should return initial state', () => {
      expect(reducers.AuthRequestState(undefined, {})).toMatchSnapshot()
    })

    it('should handle LOGIN_SUBMIT', () => {
      expect(reducers.AuthRequestState(undefined, {
        type: types.LOGIN_SUBMIT
      })).toMatchSnapshot()
    })

    it('should handle REGISTER_SUBMIT', () => {
      expect(reducers.AuthRequestState(undefined, {
        type: types.REGISTER_SUBMIT
      })).toMatchSnapshot()
    })

    it('should handle LOGIN_SUCCESS', () => {
      expect(reducers.AuthRequestState(undefined, {
        type: types.LOGIN_SUCCESS
      })).toMatchSnapshot()
    })

    it('should handle REGISTER_SUCCESS', () => {
      expect(reducers.AuthRequestState(undefined, {
        type: types.REGISTER_SUCCESS
      })).toMatchSnapshot()
    })

    it('should handle LOGIN_ERROR', () => {
      expect(reducers.AuthRequestState(undefined, {
        type: types.LOGIN_ERROR
      })).toMatchSnapshot()
    })

    it('should handle REGISTER_ERROR', () => {
      expect(reducers.AuthRequestState(undefined, {
        type: types.REGISTER_ERROR
      })).toMatchSnapshot()
    })
  })
})
