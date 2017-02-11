import { combineReducers } from 'redux'
import { SEARCH, ADD_TO_RECENT_SEARCHES } from '../constants'

const mode = (state = 'init', action) => {
  return state
}

const recentSearches = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_RECENT_SEARCHES:
      return [{term: action.term, total: action.total}, ...state]
  }

  return state
}

export default combineReducers({
  mode,
  recentSearches
})
