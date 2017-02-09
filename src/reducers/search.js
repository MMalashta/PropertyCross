import { combineReducers } from 'redux'
import { SEARCH } from '../constants'

const mode = (state = 'init', action) => {
  return state
}

const recentSearches = (state = [], action) => {
  return state
}

export default combineReducers({
  mode,
  recentSearches
})
