// @flow

import {
  INIT,
  USER_FETCH_FAIL,
  USER_FETCH_SUCCESS
} from './constants'

export type User = {
  +id: string,
  +name: string,
  +age: number
}

export type State = {
  +loading: boolean,
  +user: ?User,
  +error: ?Object
}

export type Init = {| type: typeof INIT |}
export type UserFetchSuccess = {| type: typeof USER_FETCH_SUCCESS, payload: User |}
export type UserFetchFail = {| type: typeof USER_FETCH_FAIL, payload: Object |}

export type Action = Init | UserFetchSuccess | UserFetchFail
