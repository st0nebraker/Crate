// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Grid, GridCell } from '../../ui/grid'
import Card from '../../ui/card/Card'
import { white, grey2, black } from '../../ui/common/colors'
import Button from '../../ui/button/Button'





// UI Imports
// import Card from '../../ui/card/Card'
// import Button from '../../ui/button/Button'
// import H4 from '../../ui/typography/H4'
// import Icon from '../../ui/icon'
// import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'
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
    // const { id, crate, createdAt } = this.props.subscription
    // const { isLoading } = this.state

    return (
			// Use Card comp later for survey options?
      // <Card style={{ width: '18em', backgroundColor: white }}>
			// </Card>
			<div>
        TEST
        <Card style={{ marginTop: '2em', width: '12em', backgroundColor: white }}>
        <p style={{ width: '45%', display: 'inline'}}>
            <image style={{ width: '100%', border: "1px solid black" }}>
            image1
          </image> 
          {/* <img src={`${ APP_URL }/images/crate.png`} alt={ crate.name } style={{ width: '100%' }}/> */}
        </p>  
          <p style={{ margin: '20%, 0, 2%, 0', width: '45%', display: 'inline' }}>
            <image style={{ width: '100%', border: "1px solid black"}}>
            image2
          </image> 
          {/* <img src={`${ APP_URL }/images/crate.png`} alt={ crate.name } style={{ width: '100%' }}/> */}
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          {/* <H4 font="secondary" style={{ color: black }}>{ crate.name }</H4> */}
          <p style={{}}>
            <input
              type="radio"
              // disabled={ isLoading }
            >
              {/* <Icon size={1.2} style={{ color: white }}>remove_circle_outline</Icon> Unsubscribe */}
            </input>
          </p>
        </div>
      </Card>
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
