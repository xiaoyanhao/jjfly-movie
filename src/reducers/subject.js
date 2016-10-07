import * as types from '../constants/actionTypes'

let getSubject = (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case types.REQUEST_SUBJECT:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_SUBJECT:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdate: action.receivedAt
      }, action.subject)
    default:
      return state
  }
}

let subject = (state = {}, action) => {
  switch (action.type) {
    case types.REQUEST_SUBJECT:
    case types.RECEIVE_SUBJECT:
      return Object.assign({}, state, {
        [action.id]: getSubject(state[action.id], action)
      })
    default:
      return state
  }
}


export default subject