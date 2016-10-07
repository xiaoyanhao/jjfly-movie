import * as types from '../constants/actionTypes'

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

export {sortTag, changeTag}