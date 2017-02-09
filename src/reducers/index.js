import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import search from './search'

export default combineReducers({
  routing,
  search
})
