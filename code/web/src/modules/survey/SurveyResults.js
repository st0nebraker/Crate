// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { white, grey, grey2, black } from '../../ui/common/colors'
import Button from '../../ui/button/Button'
import Icon from '../../ui/icon'
import Card from '../../ui/card/Card'
import { H3, H4 } from '../../ui/typography'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { routeImage, routes } from '../../setup/routes'
import crateRoutes from '../../setup/routes/crate'
import surveyRoutes from '../../setup/routes/survey'
import EmptyMessage from '../common/EmptyMessage'
import { messageShow, messageHide } from '../common/api/actions'
import { getSurveyProducts, parseSurveyItems } from './api/actions'

// Component
class SurveyResults extends PureComponent {_
	constructor(props) {
		super(props)
		this.state = {
			styleResult: null,
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

			<Grid style={{ display: 'flex', flexDirection: 'column', height: '80vh', justifyContent: 'space-between', alignItems: 'center', margiTop: '4em' }}>
				<Card style={{ display: 'flex', height: '70vh', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '80vw', backgroundColor: white, marginTop: '2em' }} key='style-result'>
					<p style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: black }}>My style is...</p>
					
					{this.state.styleResult ? 
						<div>
							<img src={routeImage + this.state.styleResult} alt={this.state.styleResult} style={{ width: '60%' }}/>
							<H4 font="secondary">{this.state.styleName}</H4>
						</div> : 
						<EmptyMessage message="No set style, click Change Style to take the survey!" />
					}
					
					<div style={{ width: '70%', display: 'flex', justifyContent: 'space-evenly' }}>
						<Link to={crateRoutes.list.path}>
							<Button theme="secondary">Subscribe <Icon size={1.2} style={{ color: white }}>navigate_next</Icon></Button>
						</Link>

						<Link to={surveyRoutes.survey.path}>
							<Button theme="secondary">Change Style</Button>
						</Link>
					</div>
				</Card>
			</Grid>
		</div>
		)
	}
}

// Component Properties
SurveyResults.propTypes = {
	user: PropTypes.object.isRequired,
	surveyProducts: PropTypes.object.isRequired,
	stylePref: PropTypes.object,
	getSurveyProducts: PropTypes.func.isRequired,
}

function resultState(state) {
  return {
		user: state.user,
		stylePref: state.stylePreference,
		surveyProducts: state.surveyProducts
  }
}

export default connect(resultState, {getSurveyProducts})(SurveyResults)