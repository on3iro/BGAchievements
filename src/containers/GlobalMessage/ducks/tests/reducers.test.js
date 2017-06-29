import * as reducers from '../reducers'
import * as types from '../actionTypes'

describe('GlobalError', () => {
  it('should return initial state', () => {
    expect(reducers.GlobalError(undefined, {})).toMatchSnapshot()
  })

  it('should handle GLOBAL_ERROR', () => {
    expect(reducers.GlobalError(undefined, {
      type: types.GLOBAL_ERROR,
      payload: 'Error'
    })).toMatchSnapshot()
  })

  it('should handle CLEAR_MESSAGE', () => {
    expect(reducers.GlobalError('messag', {
      type: types.CLEAR_MESSAGE
    })).toMatchSnapshot()
  })
})

describe('GlobalMessage', () => {
  it('should return initial state', () => {
    expect(reducers.GlobalMessage(undefined, {})).toMatchSnapshot()
  })

  it('should handle GLOBAL_ERROR', () => {
    expect(reducers.GlobalMessage(undefined, {
      type: types.GLOBAL_MESSAGE,
      payload: 'Message'
    })).toMatchSnapshot()
  })

  it('should handle CLEAR_MESSAGE', () => {
    expect(reducers.GlobalMessage('message', {
      type: types.CLEAR_MESSAGE
    })).toMatchSnapshot()
  })
})
