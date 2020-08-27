import SurveyPage from '../../modules/survey/SurveyPage'
import SurveyResults from '../../modules/survey/SurveyResults'

export default {
	survey: {
    path: '/style-survey',
    component: SurveyPage,
    auth: true
	},

	surveyResults: {
		path: '/style-preference',
    component: SurveyResults,
    auth: true
	}
}