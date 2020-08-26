// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import Card from '../../ui/card/Card'
import { white, grey, grey2, black } from '../../ui/common/colors'
import Button from '../../ui/button/Button'
import { H3, H4 } from '../../ui/typography'

// App Imports
import { APP_URL } from '../../setup/config/env'
import { routeImage, routes } from '../../setup/routes'
import { messageShow, messageHide } from '../common/api/actions'
import { getSurveyProducts, parseSurveyItems } from './api/actions'

// Component
class SurveyPage extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
			isLoading: false,
			parsedItems: []
    }
	}
	
  static fetchData({ store }) {
    return store.dispatch(getSurveyProducts())
  }

	componentDidMount() {
		this.props.getSurveyProducts();
	}
	
	componentDidUpdate() {
		if (this.state.parsedItems.length === 0) {
			const filteredItems = this.props.surveyProducts.products.filter(item => item.isSurvey)
			this.setState({parsedItems: filteredItems})
		}
	}

  render() {
    return (
			<div>
				<Helmet>
          <title>Style Survey</title>
        </Helmet>

        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
						<H3 font="secondary">What's your style?</H3>

						<p style={{ marginTop: '1em', color: grey2 }}>Choose the style that speaks to you for each category below.</p>
          </GridCell>
        </Grid>

			  {/* Make 3 sections, map over each one to make the card */}
				<Grid>
					<H4 font="secondary">Tops</H4>
				{this.state.parsedItems.map((item, i) => {
					return (
						<GridCell>
						<Card style={{ marginTop: '2em', width: '12em', backgroundColor: white }} key={i}>
							<img src={routeImage + item.image} alt={item.name} style={{ width: '100%' }}/>
							<p>
								<input type="radio" />
							</p>
						</Card>
						</GridCell>
						)
					})
				}
				  <Button theme="secondary" style={{ marginLeft: '1em' }}>Submit</Button>
        </Grid>
			</div>
		)
	}
}

// Component Properties
SurveyPage.propTypes = {
  // subscription: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired,
  // remove: PropTypes.func.isRequired,
  // getListByUser: PropTypes.func.isRequired,
  // messageShow: PropTypes.func.isRequired,
  // messageHide: PropTypes.func.isRequired
}

// Component State
function surveyState(state) {
  return {
		user: state.user,
		surveyProducts: state.surveyProducts
  }
}

export default connect(surveyState, { getSurveyProducts, parseSurveyItems })(SurveyPage)