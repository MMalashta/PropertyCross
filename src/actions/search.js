import { SEARCH, UPDATE_PROPERTIES_LIST } from '../constants'
import { search as searchApi } from '../api'

export const updatePropertiesList = properties => ({
  type: UPDATE_PROPERTIES_LIST,
  properties
})

export const search = (term) => (dispatch) => searchApi()
  .then(({ response }) => {
    if (response.application_response_code == 100) {
        dispatch(updatePropertiesList(response.listings))
    }
  })
