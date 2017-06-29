import { combineReducers } from 'redux'

import * as types from './actionTypes'

export const user = (state = {
  isLoggedIn: false,
  hasRegistered: false,
  token: '',
  data: {},
  error: {}
}, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const data = action.payload

      return {
        ...state,
        isLoggedIn: true,
        token: data.token,
        data: data.user,
        error: ''
      }
    }

    case types.REGISTER_SUCCESS: {
      return {
        ...state,
        hasRegistered: true
      }
    }

    case types.REGISTER_ERROR:
    case types.LOGIN_ERROR: {
      const error = action.payload

      return {
        ...state,
        error: error
      }
    }

    case types.LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        token: '',
        data: {}
      }
    }

    case types.UPDATE_MAX_ACCOUNTS: {
      return {
        ...state,
        data: {
          ...state.data,
          maxAccounts: action.payload
        }
      }
    }

    default: {
      return state
    }
  }
}

export const AuthRequestState = (state = {
  isLoading: false
}, action) => {
  switch (action.type) {
    case types.LOGIN_SUBMIT: {
      return { ...state, isLoading: true }
    }

    case types.REGISTER_SUBMIT: {
      return { ...state, isLoading: true }
    }

    case types.LOGIN_SUCCESS: {
      return { ...state, isLoading: false }
    }

    case types.REGISTER_SUCCESS: {
      return { ...state, isLoading: false }
    }

    case types.REGISTER_ERROR: {
      return { ...state, isLoading: false }
    }

    case types.LOGIN_ERROR: {
      return { ...state, isLoading: false }
    }

    default:
      return state
  }
}

const authReducer = combineReducers({
  user,
  AuthRequestState
})

export default authReducer
