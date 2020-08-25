import {
	GET_STYLE_PREF,
	GET_SURVEY_PRODUCTS,
	SURVEY_GET_LIST_FAILURE,
	PARSE_SURVEY_ITEMS
} from './actions'
import { products } from '../../product/api/state'

const styleInitialState = {
  isLoading: false,
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
				isLoading: action.isLoading,
				error: null
			}

		// case STYLE_PREF_REQUEST:
		// 	return {
		// 		...state,
		// 		isLoading: action.isLoading,
		// 		error: null
		// 	}

		// case STYLE_PREF_RESPONSE:
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		error: action.error
		// 	}

		// case ADD_STYLE_PREF:
		// 		return {
		// 			//update on survey submission
		// 		}
		
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

export const parseSurveyProducts = (state = [], action) => {
	switch (action.type) {
		case PARSE_SURVEY_ITEMS:
			const filteredProducts = action.list.filter(item => item.isSurvey);
			console.log('HERE', filteredProducts)
			return {
				...state,
				isLoading: action.isLoading,
				error: null,
				products: filteredProducts
			}
		
		default:
			return state
	}
}