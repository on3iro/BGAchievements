// @flow

import { createStore, applyMiddleware, compose } from 'redux'
import { install } from 'redux-loop'

import rootReducer from './rootReducer'

const configureStore = (initialState: Object): Object => {
  // Add middleware to this array if necessary
  const middleWares = [
  ]

  const enhancers = [
    applyMiddleware(...middleWares),
    install()
  ]

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers)
  )

  return store
}

export {
  configureStore as default
}
