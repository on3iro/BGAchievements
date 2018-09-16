// @flow

import * as React from 'react'
import styled from 'styled-components'
import { MoreVertIcon } from 'mdi-react'

import PageWrapper from 'views/components/atoms/PageWrapper'
import Content from 'views/components/atoms/Content'
import TileList from 'views/components/atoms/TileList'
import TileListItem from 'views/components/atoms/TileListItem'
import Menu from 'views/components/atoms/Menu'
import MenuButton from 'views/components/atoms/MenuButton'
import MenuList from 'views/components/atoms/MenuList'
import MenuListItem from 'views/components/atoms/MenuListItem'
import MenuListLink from 'views/components/atoms/MenuListLink'

import BoardgameTile from 'views/components/organisms/BoardgameTile'

import Header from 'views/components/organisms/Header'

const Wrapper = styled.div`
`

const StyledContent = styled(Content)`
  padding-right: 0;
  padding-left: 0;
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

    this.handleOpenMenu = this.handleOpenMenu.bind(this)
  }

  handleOpenMenu: Function
  handleOpenMenu (event: any) {
    const id = event.target.closest('button')
    console.log('clicked')
    console.log(this)
    console.log(id.dataset.target)
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
                  <TileListItem key={boardgame.id}>
                    <BoardgameTile
                      id={boardgame.id}
                      imageSrc={boardgame.imageSrc}
                      title={boardgame.title}
                      achievements={boardgame.achievements}
                      achievementsTotal={boardgame.achievementsTotal}
                      updated={boardgame.updated} />
                    <Menu>
                      <MenuButton type='button' onClick={this.handleOpenMenu} data-target={boardgame.id}>
                        <MoreVertIcon />
                      </MenuButton>
                      <MenuList>
                        <MenuListItem>
                          <MenuListLink to={'/home'}>Info</MenuListLink>
                        </MenuListItem>
                        <MenuListItem>
                          <MenuListLink to={'/home'}>Delete</MenuListLink>
                        </MenuListItem>
                      </MenuList>
                    </Menu>
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
