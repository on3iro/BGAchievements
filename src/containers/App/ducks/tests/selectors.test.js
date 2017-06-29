import * as selectors from '../selectors'

describe('selectors', () => {
  it('should get router location', () => {
    expect(selectors.getLocation({ router: { location: '/home' }}))
      .toBe('/home')
  })
})
