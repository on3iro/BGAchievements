// @flow

import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Hello from 'ducks/Hello'

import H1 from 'views/components/atoms/H1'

const Wrapper = styled.div``

const mapStateToProps = (state: Object) => {
  return {
    testData: state.test.testData
  }
}

class Home extends React.PureComponent<Object> {
  componentDidMount () {
    Hello.sideeffects.fetchSampleData()
      .then((response) => console.log({response}))
      .catch((error) => console.log({error}))
  }

  render () {
    return (
      <Wrapper>
        <H1>{this.props.testData}</H1>
      </Wrapper>
    )
  }
}

export default connect(mapStateToProps, {})(Home)
