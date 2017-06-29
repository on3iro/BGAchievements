import { combineReducers } from 'redux'

import * as types from './actionTypes'

export const GlobalError = (state = '', action) => {
  switch (action.type) {
    case types.GLOBAL_ERROR: {
      return action.payload
    }

    case types.CLEAR_MESSAGE: {
      return ''
    }

    default: {
      return state
    }
  }
}

export const GlobalMessage = (state = '', action) => {
  switch (action.type) {
    case types.GLOBAL_MESSAGE: {
      return action.payload
    }

    case types.CLEAR_MESSAGE: {
      return ''
    }

    default: {
      return state
    }
  }
}

const GlobalMessages = combineReducers({
  GlobalError,
  GlobalMessage
})

export default GlobalMessages
