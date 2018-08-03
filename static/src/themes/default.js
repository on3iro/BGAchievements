const colors = {
  burntOrange: '#d35400',
  zest: '#e67e22',
  mineShaft: '#383838',
  alto: '#dadada',
  silverChalice: '#a0a0a0',
  gallery: '#efefef',
  monza: '#c8022f',
  redDevil: '#7F001D',
  white: '#ffffff',
  black: '#000000'
}

const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '992px'
}

const defaultTheme = {
  primary: colors.burntOrange,
  primaryHover: colors.zest,
  bgPrimary: colors.redDevil,
  white: colors.white,
  black: colors.black,
  buildingUnit: 8,
  boxShadowColor: 'rgba(52, 73, 94, 0.2)',
  borderColor: colors.alto,
  screenS: breakpoints.sm,
  screenM: breakpoints.md,
  screenL: breakpoints.lg,
  baseFontSize: '16px',
  baseLineHeight: '24px',
  textColor: colors.mineShaft,
  inputBorderColor: colors.alto,
  inputBorderColorFocus: colors.burntOrange,
  inputBackgroundColor: colors.white,
  inputBackgroundColorHover: colors.gallery,
  inputBackgroundColorDisabled: colors.alto,
  avatarSize: '132px',
  hintColor: colors.silverChalice,
  tileBackgroundColorHover: colors.gallery
}

export {
  defaultTheme as default
}
