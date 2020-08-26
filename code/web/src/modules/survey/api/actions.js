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
      type: GET_STYLE_PREF,
      error: null
    })

    // return axios.post(routeApi, query({
		//   operation: 'styleUpdate', //fn name in query/mutation files
		//	variables: { style } //the args in that fn
    //   fields: ['style'] //fields in type file
    // }))
    //   .then(response => {
    //     if (response.status === 200) {
    //       dispatch({
    //         type: ADD_STYLE_PREF,
    //         style
    //         isLoading: false,
    //       }) // is the response coming from the resolvers file?
    //     } else {
    //       dispatch({
    //         type: PRODUCTS_GET_LIST_FAILURE,
    //         error: 'Some error occurred. Please try again.',
    //         isLoading: false
    //       })
    //     }
    //   })
    //   .catch(error => {
    //       dispatch({
    //         type: PRODUCTS_GET_LIST_FAILURE,
    //         error: 'Some error occurred. Please try again.',
    //         isLoading: false
    //       })
    //   })
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