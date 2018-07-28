// @flow

// Styles
import './global-styles'

// Modules
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import App from 'App'
import configureStore from 'store'

const initialState = {}
const store = configureStore(initialState)

const render = (Component) => {
  const rootElement = document.getElementById('root')

  if (!rootElement) return

  return ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootElement
  )
}

render(App)

// $FlowFixMe
if (module.hot) {
  // $FlowFixMe
  module.hot.accept('App', () => render(App))
}
