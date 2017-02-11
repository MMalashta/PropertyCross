import { SEARCH, ADD_TO_RECENT_SEARCHES, UPDATE_PROPERTIES_LIST, routs } from '../constants'
import { push } from 'react-router-redux'
import { search as searchApi } from '../api'

export const updatePropertiesList = (properties, status) => ({
  type: UPDATE_PROPERTIES_LIST,
  properties,
  status
})

export const addToRecentSearches = (term, total) => ({
  type: ADD_TO_RECENT_SEARCHES,
  term,
  total
})

export const search = (term) => (dispatch) => searchApi(term)
  .then(({ response }) => {
    const { application_response_code: responseCode } = response

    if (responseCode >= 100 && responseCode < 200) {
      dispatch(updatePropertiesList(response.listings, {
        page: response.page,
        tatalPages: response.total_pages,
        total: response.total_results
      }))
      dispatch(push(routs.SEARCH_RESULTS))
      dispatch(addToRecentSearches(term, response.total_results))
    }
  })
