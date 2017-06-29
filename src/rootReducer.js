import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'

import auth from 'containers/Auth/ducks/reducers'
import GlobalMessages from 'containers/GlobalMessage/ducks/reducers'

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  auth,
  GlobalMessages
})
