// @flow

import axios from 'axios'

import { API_URL } from 'config'

import type {
  Init,
  UserFetchFail,
  UserFetchSuccess
} from './types'

import { INIT, USER_FETCH_FAIL, USER_FETCH_SUCCESS } from './constants'

export const init = (): Init => {
  return {
    type: INIT
  }
}

export const fetchUser = (userId: string): Promise<*> => {
  return axios(`${API_URL}/${userId}`)
}

export const userFetchSuccessfulAction = (user: Object): UserFetchSuccess => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: user.data
  }
}

export const userFetchFailedAction = (err: Object): UserFetchFail => {
  return {
    type: USER_FETCH_FAIL,
    payload: err
  }
}
