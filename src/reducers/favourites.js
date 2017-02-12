import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from '../constants'

const favourites = (state = [], action) => {
  const { type, property } = action

  switch(type) {
    case ADD_TO_FAVOURITES:
      return [...state, property]
    case REMOVE_FROM_FAVOURITES:
      return state.filter(element => element.lister_url !== action.propertyUrl)
  }

  return state
}

export default favourites
