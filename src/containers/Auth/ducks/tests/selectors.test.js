import * as selectors from '../selectors'

describe('selectors', () => {
  it('should getLoggedIn information', () => {
    expect(selectors.getLoggedIn({ auth: { user: { isLoggedIn: true }}}))
      .toBe(true)
  })

  it('should getRegistered()', () => {
    expect(selectors.getRegistered({
      auth: { user: { hasRegistered: true }}
    })).toBe(true)
  })

  it('should getMaxAccounts()', () => {
    expect(selectors.getMaxAccounts({
      auth: { user: { data: { maxAccounts: 5 }}}
    })).toBe(5)
  })

  it('should getUserID()', () => {
    expect(selectors.getUserID({
      auth: { user: { data: { id: 2 }}}
    })).toBe(2)
  })

  it('should getAuthToken()', () => {
    expect(selectors.getAuthToken({
      auth: { user: { token: 'tokenABC' }}
    })).toBe('tokenABC')
  })

  it('should getLoadingState()', () => {
    expect(selectors.getLoadingState({
      auth: { AuthRequestState: { isLoading: true }}
    })).toBe(true)
  })
})
