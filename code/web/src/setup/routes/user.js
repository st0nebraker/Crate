// App Imports
import Login from '../../modules/user/Login'
import Signup from '../../modules/user/Signup'
import Profile from '../../modules/user/Profile'
import Subscriptions from '../../modules/user/Subscriptions'
import SurveyPage from '../../modules/survey/SurveyPage'

// User routes
// File contains routes for user
// Should we add a style survey route?
export default {
  login: {
    path: '/user/login',
    component: Login
  },

  signup: {
    path: '/user/signup',
    component: Signup
  },

  profile: {
    path: '/user/profile',
    component: Profile,
    auth: true
  },

  subscriptions: {
    path: '/user/subscriptions',
    component: Subscriptions,
    auth: true
	},
	
	// survey: {
  //   path: '/style-survey',
  //   component: SurveyPage,
  //   auth: true
	// },


}
//we'll add a style obj here, with file path & component
//we'll add a survey route obj in the directory above this