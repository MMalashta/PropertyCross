import { ADD_TO_RECENT_SEARCHES, REORDER_RECENT_SEARCHES } from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TO_RECENT_SEARCHES:
      return [{term: action.term, total: action.total}, ...state].slice(0,11)
    case REORDER_RECENT_SEARCHES: {
      const { index } = action,
        lastSearch = state[index]

      return [lastSearch, ...state.slice(0, index), ...state.slice(index + 1)].slice(0,11)
    }
  }

  return state
}
