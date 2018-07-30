// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Hello from 'ducks/Hello'

import H1 from 'views/components/atoms/H1'

const mapStateToProps = (state: Object) => {
  return {
    sampleData: Hello.selectors.getSampleData(state),
    loading: Hello.selectors.getLoading(state)
  }
}

const mapDispatchToProps = {
  fetchSampleData: Hello.actions.fetchSampleDataStart
}

const Wrapper = styled.div``

const renderMessages = (messages) => messages.map(msg => (
  <li key={msg.id}>{msg.message}</li>
))

class Home extends React.PureComponent<Object> {
  componentDidMount () {
    this.props.fetchSampleData()
  }

  render () {
    return (
      <Wrapper>
        <H1>{
          this.props.loading
            ? 'loading...'
            : 'not loading :P'
        }</H1>
        <ul>
          { renderMessages(this.props.sampleData) }
        </ul>
      </Wrapper>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
