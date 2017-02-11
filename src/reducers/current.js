import { GET_SINGLE_PROPERTY } from '../constants'

const current = (state = null, action) => {
  const { type, property } = action

  if (type === GET_SINGLE_PROPERTY) {
      return property
  }

  return state
}

export default current
