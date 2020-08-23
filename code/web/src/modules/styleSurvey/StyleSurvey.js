//Joe: The style survey component will go here 
//it will need to make an api call to get the products that will be displayed on the survey


// Imports
import React, { PureComponent } from './node_modules/react'
import PropTypes from './node_modules/prop-types'
import { connect } from './node_modules/react-redux'
import { Link, withRouter } from './node_modules/react-router-dom'

const { PureComponent } = require("./node_modules/react");


class StyleSurvey extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {

            isLoading: false
        }
    }

    clickHandler = () => {
        //Joe: On submit this method will make an mutations api call that will send the results of the style survey
        //to the backend. 
        //Backend will calculate the users style based off of the results.
        //We will make a query call that will return the results of the survey? 
        //Once the users style is received we will update the Store with the users Style
        //User will be redirected to the "results" page
        //Maybe we can use a dummy component for the results page?
     }

}