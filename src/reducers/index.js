import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import current from './current'
import favourites from './favourites'
import properties from './properties'
import recentSearches from './recentSearches'
import search from './search'

export default combineReducers({
  routing,
  current,
  favourites,
  properties,
  recentSearches,
  search
})
