// @flow

import { loop, Cmd } from 'redux-loop'

import {
  INIT,
  USER_FETCH_FAIL,
  USER_FETCH_SUCCESS
} from './constants'

import type {
  Action,
  State
} from './types'

import {
  fetchUser,
  userFetchFailedAction,
  userFetchSuccessfulAction
} from './actions'

const fakeUserReducer = (state: State = {
  loading: false,
  user: null,
  error: null
}, action: Action): State => {
  switch (action.type) {
    case INIT:
      return loop(
        {...state, loading: true},
        Cmd.run(fetchUser, {
          successActionCreator: userFetchSuccessfulAction,
          failActionCreator: userFetchFailedAction,
          args: ['userA']
        })
      )

    case USER_FETCH_SUCCESS:
      return { ...state, user: action.payload, loading: false }

    case USER_FETCH_FAIL:
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}

export {
  fakeUserReducer
}
