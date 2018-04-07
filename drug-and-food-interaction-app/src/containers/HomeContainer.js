import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import DrugSelection from '../components/DrugSelection';
import DrugDisplay from '../components/DrugDisplay';
import { Badge } from 'reactstrap';


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
           const {} = this.props;
            return (
                <div className="home-container">
                    <h3>Drug & Food Interaction App</h3>
                        <DrugSelection/>


                        <DrugDisplay/>

                </div>
            );
        }

    };


// HomeContainer.PropTypes = {
//    title: propTypes.String,
//     index: propTypes.String
// };


