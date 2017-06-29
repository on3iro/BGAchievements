/**
  * Root saga combining all application sagas
  */
import {all} from 'redux-saga/effects'
import authSaga from 'containers/Auth/ducks/sagas'

export default function * () {
  yield all([
    authSaga()
  ])
}
