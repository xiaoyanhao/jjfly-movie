import {combineReducers} from 'redux'
import * as types from '../constants/actionTypes'
import {routerReducer} from 'react-router-redux'

let slide = (state, action) => {
  return Object.assign({}, state, {
    currentPage: action.page
  })
}

let tip = (state, action) => {
  return Object.assign({}, state, {
    currentTip: action.tip
  })
}

let sortTag = (state, action) => {
  let sortedBy = action.sortedBy

  if (sortedBy == 'hot') {
    state.movies.subjects.sort((a, b) => b.collect_count - a.collect_count)
  } else if (sortedBy == 'time') {
    state.movies.subjects.sort((a, b) => b.year - a.year)
  } else if (sortedBy == 'rank') {
    state.movies.subjects.sort((a, b) => b.rating.average - a.rating.average)
  }

  return Object.assign({}, state, {
    sortedBy: sortedBy
  })
}

let movies = (state = {
  isFetching: false,
  currentPage: 0,
  currentTip: -1,
  sortedBy: 'default',
  movies: {subjects: []}
}, action) => {
  switch (action.type) {
    case types.REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE:
      if (state.movies.subjects) {
        action.movies.subjects = 
        state.movies.subjects.concat(action.movies.subjects)
      }

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
    case types.DISPLAY_TIP:
      return Object.assign({}, state, {
        [action.category]: tip(state[action.category], action)
      })
    case types.SORT_TAG:
      return Object.assign({}, state, {
        [action.category]: sortTag(state[action.category], action)
      })
    default:
      return state
  }
}

let currentTag = (state = '热门', action) => {
  switch (action.type) {
    case types.CHANGE_TAG:
      return action.tag
    default:
      return state
  }
}

let rootReducer = combineReducers({
  currentTag,
  category,
  routing: routerReducer
})

export default rootReducer