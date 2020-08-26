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
			parsedItems: {rocker: [], bohemian: [], business: [], artsy: []}
    }
	}
	
  static fetchData({ store }) {
    return store.dispatch(getSurveyProducts())
  }

	componentDidMount() {
		this.props.getSurveyProducts();
	}
	
	componentDidUpdate() {
		if (this.state.parsedItems.rocker.length === 0) {
			const inSurveyItems = this.props.surveyProducts.products.filter(item => item.isSurvey);
			const filteredItems = inSurveyItems.reduce((acc, item) => {
				acc[item.style].push(item);
				
				return acc;
			}, {rocker: [], bohemian: [], business: [], artsy: []}); 
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

				<Grid>
					<H4 font="secondary" style={{ marginLeft: '.2em', marginTop: '1em' }}>Tops</H4>
				</Grid>
				{this.state.parsedItems.rocker.length > 0 ? 
					(<Grid style={{ height: '24vh', width: '100vw', display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='rocker-top'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.rocker[1].image} alt={this.state.parsedItems.rocker[1].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.rocker[2].image} alt={this.state.parsedItems.rocker[2].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='bohemian-top'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.bohemian[1].image} alt={this.state.parsedItems.bohemian[1].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.bohemian[2].image} alt={this.state.parsedItems.bohemian[2].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='business-top'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.business[1].image} alt={this.state.parsedItems.business[1].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.business[2].image} alt={this.state.parsedItems.business[2].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='artsy-top'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.artsy[1].image} alt={this.state.parsedItems.artsy[1].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.artsy[2].image} alt={this.state.parsedItems.artsy[2].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
					</Grid>) : null
				}

				<Grid>
					<H4 font="secondary" style={{ marginLeft: '.2em', marginTop: '1em' }}>Bottoms</H4>
				</Grid>
				{this.state.parsedItems.rocker.length > 0 ? 
					(<Grid style={{ height: '24vh', width: '100vw', display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='rocker-bottom'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.rocker[5].image} alt={this.state.parsedItems.rocker[5].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.rocker[6].image} alt={this.state.parsedItems.rocker[6].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='bohemian-bottom'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.bohemian[5].image} alt={this.state.parsedItems.bohemian[5].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.bohemian[6].image} alt={this.state.parsedItems.bohemian[6].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='business-bottom'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.business[5].image} alt={this.state.parsedItems.business[5].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.business[6].image} alt={this.state.parsedItems.business[6].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='artsy-bottom'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.artsy[5].image} alt={this.state.parsedItems.artsy[5].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.artsy[6].image} alt={this.state.parsedItems.artsy[6].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
					</Grid>) : null
				}
				<Grid>
					<H4 font="secondary" style={{ marginLeft: '.2em', marginTop: '1em' }}>Shoes</H4>
				</Grid>
				{this.state.parsedItems.rocker.length > 0 ? 
					(<Grid style={{ height: '24vh', width: '100vw', display: 'flex', flexWrap: 'nowrap', overflowX: 'auto' }}>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='rocker-shoes'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.rocker[3].image} alt={this.state.parsedItems.rocker[3].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.rocker[4].image} alt={this.state.parsedItems.rocker[4].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='bohemian-shoes'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.bohemian[3].image} alt={this.state.parsedItems.bohemian[3].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.bohemian[4].image} alt={this.state.parsedItems.bohemian[4].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='business-shoes'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.business[3].image} alt={this.state.parsedItems.business[3].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.business[4].image} alt={this.state.parsedItems.business[4].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
						<GridCell>
							<Card style={{ marginTop: '2em', width: '19em', backgroundColor: white, marginLeft: '9px' }} key='artsy-shoes'>
								<div style={{ display: 'flex' }}>
									<img src={routeImage + this.state.parsedItems.artsy[3].image} alt={this.state.parsedItems.artsy[3].name} style={{ width: '50%' }}/>
									<img src={routeImage + this.state.parsedItems.artsy[4].image} alt={this.state.parsedItems.artsy[4].name} style={{ width: '50%' }}/>
								</div>
								<input type="radio" style={{ marginLeft: '50%' }} />
							</Card>
						</GridCell>
					</Grid>) : null
				}

				<Grid>
				  <Button theme="secondary" style={{ marginLeft: '50%', marginTop: '2em', marginBottom: '2em' }}>Submit</Button>
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