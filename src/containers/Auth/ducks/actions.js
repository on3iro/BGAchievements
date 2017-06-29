import * as types from './actionTypes'

export const loginSubmit = data => {
  return {
    type: types.LOGIN_SUBMIT,
    payload: data
  }
}

export const logout = () => {
  return {
    type: types.LOGOUT
  }
}

export const registerSubmit = data => {
  return {
    type: types.REGISTER_SUBMIT,
    payload: data
  }
}
