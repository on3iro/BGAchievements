// @flow

import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import H2 from 'views/components/atoms/H2'
import P from 'views/components/atoms/P'
import Hint from 'views/components/atoms/Hint'

import Avatar from 'views/components/molecules/Avatar'

const Wrapper = styled(Link)`
  display: flex;
  padding: ${props => props.theme.buildingUnit * 3}px;
  color: ${props => props.theme.textColor};
  text-decoration: none;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${props => props.theme.tileBackgroundColorHover};
    transition: background 0.2s ease-in-out;
  }
`

const TileContent = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  justify-content: space-between;
  padding-left: ${props => props.theme.buildingUnit * 3}px;
`
const TileContentHeader = styled.div`
`

const TileContentFooter = styled.div`
`

const TileTitle = styled(H2)`
  margin: 0;
`

type Props = {
  id: number,
  imageSrc: string,
  title: string,
  achievements: number,
  achievementsTotal: number,
  updated: string
}

class BoardgameTile extends React.PureComponent<Props> {
  render () {
    const {
      id,
      imageSrc,
      title,
      achievements,
      achievementsTotal,
      updated
    } = this.props

    return (
      <Wrapper to={`/home/${id}`}>
        <Avatar imageSrc={imageSrc} />
        <TileContent>
          <TileContentHeader>
            <TileTitle>{title}</TileTitle>
            <P>Achievements: {achievements}/{achievementsTotal}</P>
          </TileContentHeader>
          <TileContentFooter>
            <Hint alignment='right'>Last updated: {updated}</Hint>
          </TileContentFooter>
        </TileContent>
      </Wrapper>
    )
  }
}

export {
  BoardgameTile as default
}
