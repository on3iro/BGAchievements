// @flow

export type FetchSampleDataStart = {|
  type: 'SAMPLE_DATA_FETCH_START'
|}

export type FetchSampleDataSuccess = {|
  type: 'SAMPLE_DATA_FETCH_SUCCESS',
  payload: Array<{
    id: number,
    message: string
  }>
|}

export type FetchSampleDataFailure = {|
  type: 'SAMPLE_DATA_FETCH_FAILURE',
  payload: Object
|}
