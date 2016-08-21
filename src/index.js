import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import configureStore from './store/configureStore'
import JJFly from './containers/JJFly'

const store = configureStore()

render(
  <Provider store={store}>
    <JJFly />
  </Provider>,
  document.getElementById('root')
)