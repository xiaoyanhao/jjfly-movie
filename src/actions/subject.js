import {JSONP} from '../util/jsonp'
import * as types from '../constants/actionTypes'

let requestSubject = id => {
  return {
    type: types.REQUEST_SUBJECT,
    id: id
  }
}

let receiveSubject = (id, response) => {
  return {
    type: types.RECEIVE_SUBJECT,
    id: id,
    subject: response,
    receivedAt: Date.now()
  }
}

let fetchSubject = option => {
  let {id} = option
  let url = 'https://api.douban.com/v2/movie/subject/' + id

  return dispatch => {
    dispatch(requestSubject(id))

    return JSONP({
      url: url,
      success: response => dispatch(receiveSubject(id, response))
    })
  }
}

let shouldFetchSubject = (state, option) => {
  let {id} = option
  let subject = state.subject[id]

  if (!subject) {
    return true
  }
  if (subject.isFetching) {
    return false
  }

  return Date.now() - subject.lastUpdate > 3600000
}

let fetchSubjectIfNeeded = option => {
  return (dispatch, getState) => {
    if (shouldFetchSubject(getState(), option)) {
      return dispatch(fetchSubject(option))
    } else {
      return Promise.resolve()
    }
  }
}

export {fetchSubjectIfNeeded}