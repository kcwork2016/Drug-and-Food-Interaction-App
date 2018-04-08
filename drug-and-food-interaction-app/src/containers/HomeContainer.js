import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import DrugSelection from '../components/DrugSelection';
import DrugDisplay from '../components/DrugDisplay';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../css/HomeContainer.scss';

//let foodNames = ['Meat', 'Seafood','Eggs','Nuts'];
// let drugNames = ['Zoloft', 'Adderall','Alprazolam','Cymbalta','Metoprolol','Lexapro','Viagra','Omeprazole'];
export default class HomeContainer extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            drugNames:['Zoloft', 'Adderall','Alprazolam','Cymbalta','Metoprolol','Lexapro','Viagra','Omeprazole'],
            foodNames:[]
        };
        this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
        this.drugSelectionOnClick = this.drugSelectionOnClick.bind(this);
    };

    handleButtonOnClick() {
        this.setState({});
        console.log("Check Indicator Button Clicked");
        this.state.foodNames = ['Meat', 'Seafood','Eggs','Nuts'];
    }


    drugSelectionOnClick(){
        console.log("Drug Name Selected");
    }

        render( ) {
           const currentDrugName = "Lipitor 30mg";
           const {  } = this.props;
            return (
                <div className="div-home-container">

                    <Breadcrumb>
                        <BreadcrumbItem >Drug & Food Interaction App</BreadcrumbItem>
                    </Breadcrumb>

                        <DrugSelection
                            drugNames = { this.state.drugNames }
                            drugSelectionOnClick = {this.drugSelectionOnClick}
                        />
                        <DrugDisplay
                            currentDrugName = {currentDrugName}
                            foodNames = {this.state.foodNames}
                            handleButtonOnClick = {this.handleButtonOnClick}
                        />
                </div>
            );
        }
    };


// HomeContainer.PropTypes = {
//    xx: propTypes.String,
// };


