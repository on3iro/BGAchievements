/**
 * Creates button specific styles which can be applied to different elements/components
 *
 * @namespace Button.buttonStyles
 * @memberOf Button
  */

import { css } from 'styled-components'

export const getBackground = props => {
  let color = props.theme.primary
  let hover = props.theme.primaryHover

  if (props.warning) {
    color = props.theme.warning
    hover = props.theme.warningHover
  } else if (props.secondary) {
    color = props.theme.secondary
    hover = props.theme.secondaryHover
  }

  return {
    color,
    hover
  }
}

const buttonStyles = css`
  display: inline-block;
  margin: 0 0 15px 0;
  padding: 5px 10px;
  width: 100%;
  min-height: 35px;
  height: auto;

  text-decoration: none;
  background-color: ${props => getBackground(props).color};
  color: ${props => props.theme.noneWhite};

  text-align: center;

  outline: 0;
  border-radius: 1px;
  cursor: pointer;

  &:hover {
    background-color: ${props => getBackground(props).hover};
  }
`

export default buttonStyles
