import { UPDATE_PROPERTIES_LIST } from '../constants'

export default (state = [], action) => {
  if (action.type === UPDATE_PROPERTIES_LIST) {
    return action.properties
  }

  return state
}
