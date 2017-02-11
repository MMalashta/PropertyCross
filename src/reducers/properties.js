import { combineReducers } from 'redux'
import { UPDATE_PROPERTIES_LIST } from '../constants'

const properties = (state = [], action) => {
  const { properties } = action

  switch (action.type) {
    case UPDATE_PROPERTIES_LIST:
      return properties
  }

  return state
}

const status = (state = {}, action) => {
  const { status } = action

  if (action.type === UPDATE_PROPERTIES_LIST)
    return status

  return state;
}

export default combineReducers({
  properties,
  status
})
