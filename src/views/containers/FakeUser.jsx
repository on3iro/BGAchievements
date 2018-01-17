import React from 'react'
import { connect } from 'react-redux'

import { init } from 'ducks/fakeUser/actions'
import { getFakeUser, getUserLoading } from 'ducks/fakeUser/selectors'

class FakeUser extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: false
    }
  }

  componentDidMount () {
    this.setState({
      loading: this.props.userLoading
    })

    if (!this.props.fakeUser) {
      this.props.initFakeUser()
    }
  }

  render () {
    const { fakeUser } = this.props

    return (
      <div>
        <h1>Here comes the fake data...</h1>
        {
          this.state.loading || !fakeUser
            ? 'Loading...'
            : <div>{fakeUser.name} is {fakeUser.age} years old</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fakeUser: getFakeUser(state),
    userLoading: getUserLoading(state)
  }
}

export default connect(mapStateToProps, {
  initFakeUser: init
})(FakeUser)
