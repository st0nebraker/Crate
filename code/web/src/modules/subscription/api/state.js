// Imports

// App Imports
import {
  SUBSCRIPTIONS_GET_LIST_REQUEST,
  SUBSCRIPTIONS_GET_LIST_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_FAILURE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST,
  SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE,
  SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE,
  SUBSCRIPTIONS_GET_REQUEST,
  SUBSCRIPTIONS_GET_RESPONSE,
  SUBSCRIPTIONS_GET_FAILURE,
} from './actions'

// Subscriptions list

// Initial State
//we'll be making a file like this & action.js for the new Survey directory
//default state for this piece of store, given on line 27
const subscriptionsInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const subscriptions = (state = subscriptionsInitialState, action) => {
	//this block will update the store, and return the new store value based on what action is asking/doing
  switch (action.type) {
    case SUBSCRIPTIONS_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case SUBSCRIPTIONS_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }//all 3 cases return same obj & properties w/ diff values

		default:
			return state
			//default option necessary in case no case is hit
  }
}

//Our new state will be style-preference = (state = null, action)
//W/in the switch block... depends on BE. Will style preference be a string?
//Like.. 'Casual-Street'

//Another piece of state will retrieve the survey questions

//Add in reducer to retrieve whole survey options
//Wait to see how it look, object of arrays?
//Return that

// Subscriptions list by user

// Initial State
const subscriptionsByUserInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const subscriptionsByUser = (state = subscriptionsByUserInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_LIST_BY_USER_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_LIST_BY_USER_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case SUBSCRIPTIONS_GET_LIST_BY_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}

// Single subscription

// Initial State
const subscriptionInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const subscription = (state = subscriptionInitialState, action) => {
  switch (action.type) {
    case SUBSCRIPTIONS_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SUBSCRIPTIONS_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case SUBSCRIPTIONS_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}