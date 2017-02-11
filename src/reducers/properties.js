import { combineReducers } from 'redux'
import { APPEND_TO_PROPERTIES_LIST, UPDATE_PROPERTIES_LIST } from '../constants'

const properties = (state = [], action) => {
  const { properties } = action

  switch (action.type) {
    case UPDATE_PROPERTIES_LIST:
      return properties
    case APPEND_TO_PROPERTIES_LIST:
      return [...state, ...properties]
  }

  return state
}

const status = (state = {}, action) => {
  const { type, status } = action

  if (type === UPDATE_PROPERTIES_LIST || type === APPEND_TO_PROPERTIES_LIST)
    return status

  return state;
}

export default combineReducers({
  properties,
  status
})
