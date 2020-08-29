import React from 'react';
import SurveyPage from './SurveyPage';
import { render, waitFor, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
jest.mock('./api/actions')

import thunk from 'redux-thunk'
import '@testing-library/jest-dom';
import { query, mutation } from 'gql-query-builder'

const mockStore = configureStore();

describe('SurveyPage', () => {
	let store;

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
			},
			surveyProducts: {
				isLoading: false,
				error: null,
				products: [
					{
						image: '/images/quiz/rocker-top1.png',
						style: 'rocker',
						isSurvey: true,
						category: 'top'
					},
					{
						image: '/images/quiz/rocker-top2.png',
						style: 'rocker',
						isSurvey: true,
						category: 'top'
					},
					{
						image: '/images/quiz/rocker-bottoms1.png',
						style: 'rocker',
						isSurvey: true,
						category: 'bottoms'
					},
					{
						image: '/images/quiz/rocker-bottoms2.png',
						style: 'rocker',
						isSurvey: true,
						category: 'bottoms'
					},
					{
						image: '/images/quiz/rocker-shoes1.png',
						style: 'rocker',
						isSurvey: true,
						category: 'shoes'
					},
					{
						image: '/images/quiz/rocker-shoes2.png',
						style: 'rocker',
						isSurvey: true,
						category: 'shoes'
					}
				]
			}
	}

	beforeEach(() => {
		store = mockStore({
			user: {
				details: {
					name: 'Becca'
				}
			}
		});
		store.dispatch = jest.fn();
	})

	it('Should display survey title', () => {
		const { getByText } = render(
			<Provider store={store}>
				<BrowserRouter><SurveyPage /></BrowserRouter>
			</Provider>
		)

		expect(getByText('What\'s your style?')).toBeInTheDocument();
	}) 

	it('Should display a top category', () => {
		const { getByText } = render(
			<Provider store={store}>
				<BrowserRouter><SurveyPage /></BrowserRouter>
			</Provider>
		)

		expect(getByText('Tops')).toBeInTheDocument();
	}) 

	it('Should display a bottom category', () => {
		const { getByText } = render(
			<Provider store={store}>
				<BrowserRouter><SurveyPage /></BrowserRouter>
			</Provider>
		)

		expect(getByText('Tops')).toBeInTheDocument();
	}) 

	it('Should display a shoes category', () => {
		const { getByText } = render(
			<Provider store={store}>
				<BrowserRouter><SurveyPage /></BrowserRouter>
			</Provider>
		)

		expect(getByText('Shoes')).toBeInTheDocument();
	}) 

	it('Should display the submit button', () => {
		const { getByRole } = render(
			<Provider store={store}>
				<BrowserRouter><SurveyPage /></BrowserRouter>
			</Provider>
		)

		expect(getByRole('button')).toBeInTheDocument();
	}) 
	
	it('Should display the submit button', () => {
		const { getByRole } = render(
			<Provider store={store}>
				<BrowserRouter><SurveyPage /></BrowserRouter>
			</Provider>
		)
		
		expect(getByRole('button')).toBeInTheDocument();
	}) 
	
	it.skip('Should run submit function when submit is clicked', () => {
		const mockSubmit = jest.fn();
		const { getByRole, debug } = render(
			<Provider store={store}>
				<BrowserRouter><SurveyPage handleSubmit={mockSubmit} /></BrowserRouter>
			</Provider>
		)

		fireEvent.click(getByRole('button'));
		debug()
		expect(mockSubmit).toHaveBeenCalled();
	}) 
})