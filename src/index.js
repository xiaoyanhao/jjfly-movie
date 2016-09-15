import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import JJFly from './components/JJFly'
import Home from './components/Home'
import Subject from './containers/Subject'
import {Router, Route, browserHistory, IndexRoute, Redirect} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={JJFly}>
        <IndexRoute component={Home} />
        <Route path="subject/:id" component={Subject} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)