import * as types from '../constants/actionTypes'

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

export {displayTip, slideIfNeeded}