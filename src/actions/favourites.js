import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from '../constants'

export const addToFavourites = (property) => ({
  type: ADD_TO_FAVOURITES,
  property
})

export const removeFromFavourites = (propertyUrl) => ({
  type: REMOVE_FROM_FAVOURITES,
  propertyUrl
})
