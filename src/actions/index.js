import {JSONP} from '../util/jsonp'
import * as types from '../constants/actionTypes'
import InTheaters from '../mock/in-theaters'
import ComingSoon from '../mock/coming-soon'

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
  let category = option.category

  return dispatch => {
    dispatch(requestMovies(category))

    return JSONP({
      url: option.url,
      data: option.data,
      success: response => dispatch(receiveMovies(category, response)),
      // completed: response => {
      //   if (category == types.IN_THEATERS) {
      //     dispatch(receiveMovies(category, InTheaters))
      //   } else if (category == types.COMING_SOON) {
      //     dispatch(receiveMovies(category, ComingSoon))
      //   }
      // }
    })
  }
}

let shouldFetchMovies = (state, category) => {
  let item = state.category[category]
  if (!item) {
    return true
  }
  if (item.isFetching) {
    return false
  }
  return item.lastUpdate - Date.now() > 3600000
}

let fetchMoviesIfNeeded = option => {
  return (dispatch, getState) => {
    if (shouldFetchMovies(getState(), option.category)) {
      return dispatch(fetchMovies(option))
    } else {
      return Promise.resolve()
    }
  }
}

let slide = (page) => {
  return {
    type: types.SLIDE,
    page
  }
}

let slideIfNeeded = (page) => {
  return (dispatch, getState) => {
    let category = getState().category
    if (category[types.IN_THEATERS].currentPage == page) {
      return Promise.resolve()
    } else {
      return dispatch(slide(page))
    }
  }
}

let changeTip = (index) => {
  return {
    type: types.CHANGE_TIP,
    tip: index
  }
}

export {changeTip, slideIfNeeded, fetchMoviesIfNeeded}