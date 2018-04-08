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


    componentDidMount() {
        this.HomeContainer();
    }

    HomeContainer() {
        $.getJSON("https://postman-echo.com/headers").then(results => {
            return results.json();
        }).then(date => {
            let serviceData = data.results.map(info) => {
                return(
                    <div key={info.results}>
                    </div>
                )
            }
        })
    }

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


