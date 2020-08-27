import {
	GET_STYLE_PREF,
	GET_SURVEY_PRODUCTS,
	SURVEY_GET_LIST_FAILURE,
	PARSE_SURVEY_ITEMS,
	STYLE_PREF_REQUEST,
	STYLE_PREF_RESPONSE,
	PRODUCTS_GET_LIST_FAILURE,
	UPDATE_STYLE_PREF,
	UPDATE_STYLE_PREF_FAILURE
} from './actions'
import { products } from '../../product/api/state'

const styleInitialState = {
	error: null,
	style: null
}

const productsInitialState = {
	isLoading: false,
	error: null,
	products: []
}

export const stylePreference = (state = styleInitialState, action) => {
	switch (action.type) {
		case GET_STYLE_PREF:
			return {
				...state,
				error: null
			}

		case STYLE_PREF_REQUEST:
			return {
				...state,
				error: null,
				style: action.styleResult
			}

		case STYLE_PREF_RESPONSE:
			return {
				...state,
				error: action.error,
				style: action.styleResult
			}

		case UPDATE_STYLE_PREF:
			return {
				...state,
				error: action.error,
				style: action.styleResult
			}
		
		default:
			return state
	}
}

export const surveyProducts = (state = productsInitialState, action) => {
	switch (action.type) {
		case GET_SURVEY_PRODUCTS:
			return {
				...state,
				isLoading: action.isLoading,
				error: null,
				products: action.list
			}
		
		case SURVEY_GET_LIST_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.error
			}
		
		default:
			return state
	}
}