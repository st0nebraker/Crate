// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const GET_STYLE_PREF = 'GET_STYLE_PREF'
export const GET_SURVEY_PRODUCTS = 'GET_SURVEY_PRODUCTS'
export const SURVEY_GET_LIST_FAILURE = 'SURVEY_GET_LIST_FAILURE'

// Actions

export function getStylePref(forceRefresh = false) {
  return dispatch => {
    dispatch({
      type: STYLE_PREF_REQUEST,
      error: null
    })

    return axios.post(routeApi, query({
		  operation: 'user', //fn name in query/mutation files
			variables: { id }, // user id //the args in that fn
      fields: ['styleResult'] //fields in type file
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: STYLE_PREF_RESPONSE,
            styleResult
          })
        }
      })
      .catch(error => {
          dispatch({
            type: PRODUCTS_GET_LIST_FAILURE,//make reducer for
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
      })
  }
}

export function updateStylePref(forceRefresh = false) {
  return dispatch => {
    dispatch({
      type: UPDATE_STYLE_PREF,
      error: null
    })

    return axios.post(routeApi, mutation({
		  operation: 'user', //fn name in query/mutation files
			variables: { id, styleResult }, // user id //the args in that fn
      fields: ['id', 'styleResult'] //fields in type file
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: UPDATE_STYLE_PREF,
            styleResult
          })
        }
      })
      .catch(error => {
          dispatch({
            type: UPDATE_STYLE_PREF_FAILURE,//make reducer for
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
      })
  }
}

export function getSurveyProducts(isLoading = true, forceRefresh = false) {
	return dispatch => {
		return axios.post(routeApi, query({
			operation: 'products',
			fields: ['name', 'description', 'image', 'style', 'isSurvey', 'category']
		}))
			.then(response => {
					dispatch({
						type: GET_SURVEY_PRODUCTS,
						isLoading: false,
						error: null,
						list: response.data.data.products
					})
				return response
			})
      .catch(error => {
          dispatch({
            type: SURVEY_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
			})
	}
}