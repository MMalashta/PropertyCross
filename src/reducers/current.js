import { CLEAR_SINGLE_PROPERTY, GET_SINGLE_PROPERTY } from '../constants'

const current = (state = null, action) => {
  const { type, property } = action

  switch(type) {
    case GET_SINGLE_PROPERTY:
      return property
    case CLEAR_SINGLE_PROPERTY:
      return null
  }

  return state
}

export default current
