import { combineReducers } from 'redux'
import { CHANGE_MODE, THROW_ERROR, modes } from '../constants'

const mode = (state = modes.INIT, action) => {
  switch (action.type) {
    case THROW_ERROR:
      return modes.ERROR
    case CHANGE_MODE:
      return action.mode
  }

  return state
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case THROW_ERROR:
      return action.message
  }

  return state
}

export default combineReducers({
  mode,
  errorMessage
})
