import axios from 'axios'
import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'

import { BASE_URL } from 'config/constants'

import * as types from './actionTypes'
import * as globalMessageTypes from 'containers/GlobalMessage/ducks/actionTypes'

// Login
export function * requestLogin (action) {
  const url = `${BASE_URL}/login`
  const config = {
    headers: {'Content-Type': 'application/json'}
  }

  try {
    const response = yield call(axios.post, url, action.payload, config)

    yield put({ type: types.LOGIN_SUCCESS, payload: response.data })
  } catch (error) {
    yield put({ type: types.LOGIN_ERROR })
    // TODO remove hardcoded values
    // The server currently has trouble propagating error messages correctly
    // therefore we need to specify the most common error message, although
    // this might to lead to wrong messages (e.g. if there is indeed a NetworkError)
    const errorMessage = 'Email und/oder Passwort sind falsch!'
    yield put({ type: globalMessageTypes.GLOBAL_ERROR, payload: errorMessage })
    yield call(delay, 20000)
    yield put({ type: globalMessageTypes.CLEAR_MESSAGE })
  }
}

// Register
export function * requestRegister (action) {
  const url = `${BASE_URL}/users`
  const config = {
    headers: {'Content-Type': 'application/json'}
  }

  try {
    const response = yield call(axios.post, url, action.payload, config)
    yield put({ type: globalMessageTypes.GLOBAL_MESSAGE, payload: 'Registrierung erfolgreich!' })
    yield put({ type: types.REGISTER_SUCCESS, payload: response.data })
  } catch (error) {
    yield put({ type: types.REGISTER_ERROR, payload: error.message })
    // TODO remove hardcoded values
    // The server currently has trouble propagating error messages correctly
    // therefore we need to specify the most common error message, although
    // this might to lead to wrong messages (e.g. if there is indeed a NetworkError)
    const errorMessage = 'Ein Nutzer mit dieser Email ist bereits registriert!'
    yield put({ type: globalMessageTypes.GLOBAL_ERROR, payload: errorMessage })
    yield call(delay, 20000)
    yield put({ type: globalMessageTypes.CLEAR_MESSAGE })
  }
}

// Auth watcher
export function * handleAuth () {
  yield takeLatest(types.LOGIN_SUBMIT, requestLogin)
  yield takeLatest(types.REGISTER_SUBMIT, requestRegister)
}

export default function * () {
  yield all([
    fork(handleAuth)
  ])
}
