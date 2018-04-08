import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import DrugSelection from '../components/DrugSelection';
import DrugDisplay from '../components/DrugDisplay';
import { Badge } from 'reactstrap';
import  drugNames from '../services/mockData/drugData';


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
            const foodNames = ['food1', 'food2','food3','food4'];
           const drugNames = ['Drug1', 'Drug2','Drug1','Drug1','Drug1','Drug1','Drug1','Drug1','Drug1','Drug1'];
           const {  } = this.props;
            return (
                <div className="home-container">
                    <h3>Drug & Food Interaction App</h3>
                        <DrugSelection
                            drugNames = { drugNames }
                        />

                        <DrugDisplay
                            foodNames = {foodNames}

                        />

                </div>
            );
        }
    };


// HomeContainer.PropTypes = {
//    title: propTypes.String,
//     index: propTypes.String
// };


