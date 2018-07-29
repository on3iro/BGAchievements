// @flow

import { combineReducers } from 'redux-loop'

import Hello from 'ducks/Hello'

export default combineReducers({
  test: Hello.Reducer
})
