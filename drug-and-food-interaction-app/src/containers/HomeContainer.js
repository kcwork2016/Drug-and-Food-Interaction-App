import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import SubmitButton from '../components/SubmitButton';

class HomeContainer extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            //add state val
        };
        //function goes here
        // this.handleRadioOnClick = this.handleRadioOnClick.bind(this);
    }


        render( ) {
           const {} = this.props;

            return (
                <div className="home-container">
                    <SubmitButton/>

                </div>
            );
        }



    }
    export default HomeContainer;

