import { combineReducers } from 'redux'

import { activetab } from '../actions/actiontype'

function activetabreducer(state = 'Home', action) {
  if (action.type == activetab) {
    return action.activetab
  }
  return state
}

export default combineReducers({
  activetab: activetabreducer
})
