import {JSONP} from '../util/jsonp'
import 'whatwg-fetch'
import * as types from '../constants/actionTypes'
import InTheaters from '../mock/in-theaters'

let requestMovies = category => {
  return {
    type: types.REQUEST,
    category: category
  }
}

let receiveMovies = (category, response) => {
  return {
    type: types.RECEIVE,
    movies: response,
    category: category,
    receivedAt: Date.now()
  }
}

let fetchMovies = option => {
  let {category, data, tag} = option
  let url = tag
    ? 'https://api.douban.com/v2/movie/search?tag=' + category
    : 'https://api.douban.com/v2/movie/' + category.toLowerCase()

  return dispatch => {
    dispatch(requestMovies(category))

    return JSONP({
      url: url,
      data: data || {start: 0, count: 20},
      success: response => dispatch(receiveMovies(category, response))
      // completed: response => {
      //     dispatch(receiveMovies(category, InTheaters))
      // }
    })
  }
}

let shouldFetchMovies = (state, option) => {
  let {category, data} = option
  let item = state.category[category]

  if (!item) {
    return true
  }
  if (item.isFetching) {
    return false
  }
  if (item.movies.start != data.start) {
    return true;
  }

  return item.lastUpdate - Date.now() > 3600000
}

let fetchMoviesIfNeeded = option => {
  return (dispatch, getState) => {
    if (shouldFetchMovies(getState(), option)) {
      return dispatch(fetchMovies(option))
    } else {
      return Promise.resolve()
    }
  }
}

let slide = page => {
  return {
    type: types.SLIDE,
    page
  }
}

let slideIfNeeded = page => {
  return (dispatch, getState) => {
    let category = getState().category
    if (category[types.IN_THEATERS].currentPage == page) {
      return Promise.resolve()
    } else {
      return dispatch(slide(page))
    }
  }
}

let displayTip = (category, index) => {
  return {
    type: types.DISPLAY_TIP,
    category: category,
    tip: index
  }
}

let changeTag = tag => {
  return {
    type: types.CHANGE_TAG,
    tag: tag
  }
}

let sortTag = (category, sortedBy) => {
  return {
    type: types.SORT_TAG,
    category: category,
    sortedBy: sortedBy
  }
}

export {sortTag, displayTip, changeTag, slideIfNeeded, fetchMoviesIfNeeded}