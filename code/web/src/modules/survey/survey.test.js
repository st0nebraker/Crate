import React from 'react'
import SurveyPage from './SurveyPage'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

describe('SurveyPage', () => {

    let surveyPageElement
    const surveyState = {
        user: 3,
        surveyProducts:  [{description: 'Product1'}]
    }
    const getSurveyProducts = jest.fn()
    const parseSurveyItems = jest.fn()

    beforeEach(() => {
        surveyPageElement = (
            <Provider>
                <MemoryRouter>
                    <SurveyPage />
                </MemoryRouter>
            </Provider>
    )
    })

    it('Should render the survey page', () => {
        const { getByTestId, getByText } = render(surveyPageElement)
        const header = getByTestId('stylePage-greeting')

        expect(header).toBeInTheDocument()
    }) 
        
})