import {combineReducers} from 'redux'
import * as types from '../constants/actionTypes'

let slide = (state, action) => {
  switch(action.type) {
    case types.SLIDE:
      return Object.assign({}, state, {
        currentPage: action.page
      })
    default:
      return state
  }
}

let changeTip = (state, action) => {
  switch(action.type) {
    case types.CHANGE_TIP:
      return Object.assign({}, state, {
        currentTip: action.tip
      })
    default:
      return state
  }
}

let movies = (state = {
  isFetching: false,
  currentPage: 0,
  currentTip: -1,
  movies: {}
}, action) => {
  switch (action.type) {
    case types.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        movies: action.movies,
        lastUpdate: action.receivedAt
      })
    default:
      return state
  }
}

let category = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST:
    case types.RECEIVE:
      return Object.assign({}, state, {
        [action.category]: movies(state[action.category], action)
      })
    case types.SLIDE:
      return Object.assign({}, state, {
        [types.IN_THEATERS]: slide(state[types.IN_THEATERS], action)
      })
    case types.CHANGE_TIP:
      return Object.assign({}, state, {
        [types.IN_THEATERS]: changeTip(state[types.IN_THEATERS], action)
      })
    default:
      return state
  }
}

let rootReducer = combineReducers({
  category 
})

export default rootReducer