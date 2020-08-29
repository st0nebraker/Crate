import * as actions from './actions.js';
import fetchMock from 'fetch-mock'

describe('actions', () => {
	it.skip('should create an action to add a todo', () => {
		fetchMock.getOnce('/surveyProducts', query({
			operation: 'products',
			fields: ['name', 'description', 'image', 'style', 'isSurvey', 'category']
			})
		)

		const expectedActions = [
			{
				type: types.GET_SURVEY_PRODUCTS, isLoading: false,
				error: null,
				list:'thing'
			},
			{
				type: types.SURVEY_GET_LIST_FAILURE, 
				error: 'Some error occurred. Please try again.',
				isLoading: false 
			}
		]

		const store = mockStore({ surveyItems: [] })

		return store.dispatch(types.getSurveyProducts()).then(() => {
				// return of async actions
				expect(store.getActions()).toEqual(expectedActions)
		})
	})
})  