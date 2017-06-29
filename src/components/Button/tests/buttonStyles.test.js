import { getBackground } from '../buttonStyles'

describe('getBackground()', () => {
  it('should return primary theme as default', () => {
    const props = {
      theme: {
        primary: 'primary',
        primaryHover: 'primaryHover'
      }
    }
    expect(getBackground(props)).toEqual({ color: 'primary', hover: 'primaryHover'})
  })

  it('should return warning theme if warning prop is set', () => {
    const props = {
      theme: {
        warning: 'warning',
        warningHover: 'warningHover'
      },
      warning: true
    }
    expect(getBackground(props)).toEqual({ color: 'warning', hover: 'warningHover'})
  })

  it('should return secondary theme if secondary prop ist set', () => {
    const props = {
      theme: {
        secondary: 'secondary',
        secondaryHover: 'secondaryHover'
      },
      secondary: true
    }
    expect(getBackground(props)).toEqual({ color: 'secondary', hover: 'secondaryHover'})
  })
})
