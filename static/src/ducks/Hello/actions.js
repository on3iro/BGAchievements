// @flow

import * as types from './types'

export const fetchSampleDataStart = (): types.FetchSampleDataStart => {
  return {
    type: 'SAMPLE_DATA_FETCH_START'
  }
}

export const fetchSampleDataSuccess = ({ data }: Object): types.FetchSampleDataSuccess => {
  return {
    type: 'SAMPLE_DATA_FETCH_SUCCESS',
    payload: data
  }
}

export const fetchSampleDataFailure = (error: Object) => {
  return {
    type: 'SAMPLE_DATA_FETCH_FAILURE',
    payload: error
  }
}
