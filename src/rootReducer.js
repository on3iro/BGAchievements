// @flow

import { combineReducers } from 'redux-loop'

import { fakeUserReducer } from 'ducks/fakeUser/reducers.js'

export default combineReducers({
  fakeUser: fakeUserReducer
})
