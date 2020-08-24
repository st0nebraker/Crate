import {
	GET_STYLE_PREF
} from './actions'

const styleInitialState = {
  isLoading: false,
	error: null,
	style: null
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