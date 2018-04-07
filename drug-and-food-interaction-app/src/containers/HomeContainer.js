import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import DrugSelection from '../components/DrugSelection';
import DrugDisplay from '../components/DrugDisplay';

export default class HomeContainer extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            //add state val
        };
        //function goes here
        // this.handleRadioOnClick = this.handleRadioOnClick.bind(this);
    };


        render( ) {
           const {title, index} = this.props;
            return (
                <div className="home-container">
                        <DrugSelection
                        />


                        <DrugDisplay/>

                </div>
            );
        }

    };


function mapStateToProps(state) {


}

// HomeContainer.PropTypes = {
//    title: propTypes.String,
//     index: propTypes.String
// };


