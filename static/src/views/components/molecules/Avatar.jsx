// @flow

import * as React from 'react'
import styled from 'styled-components'

import Img from 'views/components/atoms/Img'

const StyledImage = styled(Img)`
  width: ${props => props.theme.avatarSize};
  height: ${props => props.theme.avatarSize};
  border-radius: ${props => props.theme.buildingUnit * 0.5}px;
  object-fit: cover;
  object-position: center;
`

class Avatar extends React.PureComponent<Object> {
  render () {
    return (
      <StyledImage src={this.props.imageSrc} />
    )
  }
}

export {
  Avatar as default
}
