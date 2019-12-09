import { render } from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import { reducer } from './todoListRedux'

const store = createStore(reducer)

const AppWithStore = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(AppWithStore, document.querySelector('#root'))
