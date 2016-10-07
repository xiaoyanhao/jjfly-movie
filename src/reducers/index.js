import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import category from './category'
import subject from './subject'


let rootReducer = combineReducers({
  category,
  subject,
  routing: routerReducer
})

export default rootReducer