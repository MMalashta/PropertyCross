import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

function search(state = {mode: 'init'}, action) {
  return state;
}

export default  combineReducers({
  routing: routerReducer,
  search
})
