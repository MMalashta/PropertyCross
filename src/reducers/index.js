import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import current from './current'
import properties from './properties'
import search from './search'

export default combineReducers({
  routing,
  current,
  properties,
  search
})
