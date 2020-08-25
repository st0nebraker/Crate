// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const GET_STYLE_PREF = 'GET_STYLE_PREF'
export const GET_SURVEY_PRODUCTS = 'GET_SURVEY_PRODUCTS'
export const SURVEY_GET_LIST_FAILURE = 'SURVEY_GET_LIST_FAILURE'
export const PARSE_SURVEY_ITEMS = 'PARSE_SURVEY_ITEMS'

// Actions

export function getStylePref(isLoading = true, forceRefresh = false) {
  return dispatch => {
    dispatch({
      type: GET_STYLE_PREF,
      isLoading,
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
			fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt', 'updatedAt', 'style', 'isSurvey']
		}))
			.then(response => {
				if (response.status === 200) {
					dispatch({
						type: GET_SURVEY_PRODUCTS,
						isLoading,
						error: null,
						list: response.data.data.products
					})
				} else {
					dispatch({
            type: SURVEY_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
        }
			})
			.then(response => {
				dispatch({
				type: PARSE_SURVEY_ITEMS,
				isLoading: action.isLoading,
				error: null,
				list: response.data.data.products
			})})
      .catch(error => {
          dispatch({
            type: SURVEY_GET_LIST_FAILURE,
            error: 'Some error occurred. Please try again.',
            isLoading: false
          })
			})
	}
}

export function parseSurveyItems(products) {
	return dispatch => {
		dispatch({
			type: PARSE_SURVEY_ITEMS,
			list: products
		})
	}
}