// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { white, grey, grey2, black } from '../../ui/common/colors'
import Button from '../../ui/button/Button'
import { H3, H4 } from '../../ui/typography'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { routeImage, routes } from '../../setup/routes'
import { messageShow, messageHide } from '../common/api/actions'
import { getSurveyProducts, parseSurveyItems } from './api/actions'

// Component
class SurveyResults extends PureComponent {_
	constructor(props) {
		super(props)
		this.state = {
			styleResult: {},
			styleName: null
		}
	}

	componentDidMount() {
		this.props.getSurveyProducts();
	}

	componentDidUpdate() {
		if (this.props.stylePref.style) {
			const resultItem = this.props.surveyProducts.products.filter(item => item.category === 'result').find(item => item.style === this.props.stylePref.style);
			this.setState({styleResult: resultItem.image, styleName: resultItem.style});
		}
	}

	render() {
		return (
		<div>
			<Helmet>
				<title>Style Survey - Crate</title>
			</Helmet>

			<Grid style={{ backgroundColor: grey }}>
				<GridCell style={{ padding: '2em', textAlign: 'center' }}>
					<H3 font="secondary">My Style Preference</H3>
				</GridCell>
			</Grid>

			<Grid style={{ display: 'flex', flexDirection: 'column', height: '61vh', justifyContent: 'space-evenly', alignItems: 'center' }}>
				<p style={{ marginTop: '1em', color: black }}>My style is...</p>

				<H4 font="secondary">Artsy-Bohemian</H4>
				<Button theme="secondary" style={{ marginBottom: '2em' }}>Find Subscription</Button>
			</Grid>
		</div>
		)
	}
}

// Component Properties
SurveyResults.propTypes = {
  // subscription: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
  // remove: PropTypes.func.isRequired,
  // getListByUser: PropTypes.func.isRequired,
  // messageShow: PropTypes.func.isRequired,
  // messageHide: PropTypes.func.isRequired
}

function resultState(state) {
  return {
		user: state.user,
		stylePref: state.stylePreference,
		surveyProducts: state.surveyProducts
  }
}

export default connect(resultState, {getSurveyProducts})(SurveyResults)