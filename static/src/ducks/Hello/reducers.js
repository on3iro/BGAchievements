import { combineReducers, loop, Cmd } from 'redux-loop'

import * as actions from './actions'
import sideeffects from './sideeffects'

const HelloReducer = (state = [], action) => {
  switch (action.type) {
    case 'SAMPLE_DATA_FETCH_START': {
      return loop(state, Cmd.run(sideeffects.fetchSampleData, {
        successActionCreator: actions.fetchSampleDataSuccess,
        errorActionCreator: actions.fetchSampleDataFailure
      }))
    }

    case 'SAMPLE_DATA_FETCH_SUCCESS': {
      return action.payload
    }

    case 'SAMPLE_DATA_FETCH_FAILURE': {
      return []
    }

    default: {
      return state
    }
  }
}

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'SAMPLE_DATA_FETCH_START': {
      return true
    }

    case 'SAMPLE_DATA_FETCH_SUCCESS':
    case 'SAMPLE_DATA_FETCH_FAILURE': {
      return false
    }

    default: {
      return state
    }
  }
}

export default combineReducers({
  sampleData: HelloReducer,
  loading: LoadingReducer
})
