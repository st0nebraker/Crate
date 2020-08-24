// Imports
import axios from 'axios'
import { query, mutation } from 'gql-query-builder'

// App Imports
import { routeApi } from '../../../setup/routes'

// Actions Types
export const GET_STYLE_PREF = 'GET_STYLE_PREF'
// export const PRODUCTS_GET_LIST_RESPONSE = 'PRODUCTS/GET_LIST_RESPONSE'

// Actions

// Get list of products
export function getStylePref(isLoading = true, forceRefresh = false) {
  return dispatch => {
    dispatch({
      type: GET_STYLE_PREF,
      isLoading,
      error: null
    })

    // return axios.post(routeApi, query({
    //   operation: 'products',
    //   fields: ['id', 'name', 'slug', 'description', 'image', 'createdAt', 'updatedAt']
    // }))
    //   .then(response => {
    //     if (response.status === 200) {
    //       dispatch({
    //         type: PRODUCTS_GET_LIST_RESPONSE,
    //         error: null,
    //         isLoading: false,
    //         list: response.data.data.products
    //       })
    //     } else {
    //       dispatch({
    //         type: PRODUCTS_GET_LIST_FAILURE,
    //         error: 'Some error occurred. Please try again.',
    //         isLoading: false
    //       })
    //     }
    //   })
    //   .catch(error => {
    //     dispatch({
    //       type: PRODUCTS_GET_LIST_FAILURE,
    //       error: 'Some error occurred. Please try again.',
    //       isLoading: false
    //     })
    //   })
  }
}
