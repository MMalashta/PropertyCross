import {
  SEARCH,
  ADD_TO_RECENT_SEARCHES,
  REORDER_RECENT_SEARCHES,
  UPDATE_PROPERTIES_LIST,
  APPEND_TO_PROPERTIES_LIST,
  GET_SINGLE_PROPERTY,
  CLEAR_SINGLE_PROPERTY,
  routs
} from '../constants'
import { push } from 'react-router-redux'
import { search as searchApi } from '../api'

export const updatePropertiesList = (properties, status) => ({
  type: UPDATE_PROPERTIES_LIST,
  properties,
  status
})

export const getSingleProperty = (property) => ({
  type: GET_SINGLE_PROPERTY,
  property
})

export const clearSingleProperty = () => ({type: CLEAR_SINGLE_PROPERTY})

export const addToRecentSearches = (term, total) => ({
  type: ADD_TO_RECENT_SEARCHES,
  term,
  total
})

export const reorderRecentSearches = (index) => ({
  type: REORDER_RECENT_SEARCHES,
  index
})

export const search = (term, recentIndex) => (dispatch) => searchApi(term)
  .then(({ response }) => {
    const { application_response_code: responseCode } = response

    if (responseCode >= 100 && responseCode < 200) {
      dispatch(updatePropertiesList(response.listings, {
        page: response.page,
        tatalPages: response.total_pages,
        total: response.total_results,
        term
      }))
      dispatch(push(routs.SEARCH_RESULTS))
      recentIndex ?
        dispatch(reorderRecentSearches(recentIndex)):
        dispatch(addToRecentSearches(term, response.total_results))
    }
  })

export const loadMoreProperties = (term, page) => (dispatch) => searchApi(term, page)
  .then(({ response }) => {
    const { application_response_code: responseCode } = response

    if (responseCode >= 100 && responseCode < 200) {
      dispatch({
        type: APPEND_TO_PROPERTIES_LIST,
        properties: response.listings,
        status: {
          page: response.page,
          tatalPages: response.total_pages,
          total: response.total_results,
          term
        }
      })
    }
  })
