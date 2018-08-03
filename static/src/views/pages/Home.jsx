// @flow

import * as React from 'react'
import styled from 'styled-components'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import Ul from 'views/components/atoms/Ul'

import BoardgameTile from 'views/components/organisms/BoardgameTile'

import Header from 'views/components/organisms/Header'

const Wrapper = styled.div``

const StyledContent = styled(Content)`
  padding-right: 0;
  padding-left: 0;
`

const TileList = styled(Ul)`
  margin: 0;
  padding: 0;
`

const TileListItem = styled.li`
  border-bottom: 1px solid ${props => props.theme.borderColor};
`

type State = {
  boardgames: any
}

class Home extends React.PureComponent<Object, State> {
  constructor (props: any) {
    super(props)

    this.state = {
      boardgames: [
        {
          id: 1,
          imageSrc: 'https://images.unsplash.com/photo-1533209901383-ed01cc39a6c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbab1aed831d3409035d2caf278ffe20&auto=format&fit=crop&w=1950&q=80',
          title: 'Gloomhaven',
          achievements: 0,
          achievementsTotal: 12,
          updated: '12.01.2018'
        },
        {
          id: 2,
          imageSrc: 'https://images.unsplash.com/photo-1533209901383-ed01cc39a6c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbab1aed831d3409035d2caf278ffe20&auto=format&fit=crop&w=1950&q=80',
          title: 'Netrunner',
          achievements: 0,
          achievementsTotal: 12,
          updated: '12.01.2018'
        },
        {
          id: 3,
          imageSrc: 'https://images.unsplash.com/photo-1533209901383-ed01cc39a6c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbab1aed831d3409035d2caf278ffe20&auto=format&fit=crop&w=1950&q=80',
          title: 'Chess',
          achievements: 0,
          achievementsTotal: 12,
          updated: '15.01.2018'
        }
      ]
    }
  }

  render () {
    return (
      <PageWrapper>
        <Header title='BGAchievements' navVisible />
        <StyledContent>
          <Wrapper>
            <TileList>
              { this.state.boardgames.map((boardgame) => {
                return (
                  <TileListItem>
                    <BoardgameTile
                      id={boardgame.id}
                      imageSrc={boardgame.imageSrc}
                      title={boardgame.title}
                      achievements={boardgame.achievements}
                      achievementsTotal={boardgame.achievementsTotal}
                      updated={boardgame.updated} />
                  </TileListItem>
                )
              })}
            </TileList>
          </Wrapper>
        </StyledContent>
      </PageWrapper>
    )
  }
}

export {
  Home as default
}
