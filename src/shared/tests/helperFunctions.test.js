import * as helpers from '../helperFunctions'

describe('helperFunctions', () => {
  it('surpressNoUsedVarsLinterError() should return its argument', () => {
    const arg = 'test'
    expect(helpers.surpressNoUsedVarsLinterError(arg)).toEqual({ '0': arg })
  })
})
