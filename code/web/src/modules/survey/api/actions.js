// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const STYLE_PREF_RESPONSE = 'STYLE_PREF_RESPONSE'
export const PRODUCTS_GET_LIST_FAILURE = 'PRODUCTS_GET_LIST_FAILURE'
export const UPDATE_STYLE_PREF = 'UPDATE_STYLE_PREF'
export const UPDATE_STYLE_PREF_FAILURE = 'UPDATE_STYLE_PREF_FAILURE'
export const GET_STYLE_PREF = 'GET_STYLE_PREF'
export const GET_SURVEY_PRODUCTS = 'GET_SURVEY_PRODUCTS'
export const SURVEY_GET_LIST_FAILURE = 'SURVEY_GET_LIST_FAILURE'

// Actions
export function updateStylePref(id, styleResult) {
  return dispatch => {
    return axios.post(routeApi, mutation({
		  operation: 'userUpdate', //fn name in query/mutation files
			variables: { id, styleResult }, // user id //the args in that fn
      fields: ['styleResult'] //fields in type file
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
						type: UPDATE_STYLE_PREF,
						error: null,
            styleResult: response.data.data.userUpdate.styleResult
          })
        }
      })
      // .catch(error => {
      //     dispatch({
      //       type: UPDATE_STYLE_PREF_FAILURE,//make reducer for
      //       error: 'Some error occurred. Please try again.',
      //       isLoading: false
      //     })
      // })
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