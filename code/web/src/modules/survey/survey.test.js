import React from 'react'
import SurveyPage from './SurveyPage'
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router-dom'
import configureMockStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import * as types from './api/actions'
import fetchMock from 'fetch-mock'
import { query, mutation } from 'gql-query-builder'


// import user from '../../setup/routes/user';
jest.mock('./api/actions')
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockServiceCreator = (body, succeeds = true) => () =>
    new Promise((resolve, reject) => {
        setTimeout(() => (succeeds ? resolve(body) : reject(body)), 10);
    });

    describe('actions', () => {
            it.only('should create an action to add a todo', () => {
                fetchMock.getOnce('/surveyProducts', query({
                        operation: 'products',
                        fields: ['name', 'description', 'image', 'style', 'isSurvey', 'category']
                })
                )

                const expectedActions = [
                    {
                        type: types.GET_SURVEY_PRODUCTS, isLoading: false,
                        error: null,
                        list:'thing' },
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

describe('SurveyPage', () => {

    let surveyPageElement
    
    // const getSurveyProducts = jest.fn()
    // const parseSurveyItems = jest.fn()
    // const surveyState = jest.fn(state => {})

    const state = {
        user: {
            details: 'Joe',
            error: null,
            isAuthenticated: true,
            isLoading: false
        },
        products: {
            error: '',
            isLoading: false,
            List: []
        }
    }

    // const store = {
    //     subscribe: () => {},
    //     getState: () => {},
    //     dispatch: ()=> {}
    // }
    let store

    beforeEach(() => {

        store = mockStore(
            {
                subscribe: () => { },
                getState: () => { },
                dispatch: () => { }
            }
        );

        surveyPageElement = (
            <Provider store={store}>
                <MemoryRouter>
                    <SurveyPage />
                </MemoryRouter>
            </Provider>
    )
    })

    it('Should render the survey page', async () => {
        const { getByTestId, getByText } = render(surveyPageElement)
        
        await waitFor(() => {
            const header = getByTestId('stylePage-greeting') 
            
            expect(header).toBeInTheDocument()
        })
        
    }) 
        
})