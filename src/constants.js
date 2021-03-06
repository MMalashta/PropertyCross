export const SEARCH = 'SEARCH'
export const CHANGE_MODE = 'CHANGE_MODE'
export const THROW_ERROR = 'THROW_ERROR'
export const ADD_TO_RECENT_SEARCHES = 'ADD_TO_RECENT_SEARCHES'
export const REORDER_RECENT_SEARCHES = 'REORDER_RECENT_SEARCHES'
export const UPDATE_PROPERTIES_LIST = 'UPDATE_PROPERTIES_LIST'
export const APPEND_TO_PROPERTIES_LIST = 'APPEND_TO_PROPERTIES_LIST'
export const GET_SINGLE_PROPERTY = 'GET_SINGLE_PROPERTY'
export const CLEAR_SINGLE_PROPERTY = 'CLEAR_SINGLE_PROPERTY '

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'

export const routs = {
  FAVOURITES: '/favourites',
  SEARCH_RESULTS: '/search-results',
  PROPERTY: '/property/'
}

export const modes = {
  INIT: 'init',
  ERROR: 'error'
}

export const errors = {
  ZERO_PROPS: 'Zero properties returned',
  UNKNOWN: 'Location not found'
}
