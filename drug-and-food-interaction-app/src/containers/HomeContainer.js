import React, {Component} from 'react';
import { PropTypes } from 'prop-types';
import DrugSelection from '../components/DrugSelection';
import DrugDisplay from '../components/DrugDisplay';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../css/HomeContainer.scss';


export default class HomeContainer extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            //add state val
        };
        //function goes here
        this.handleButtonOnClick = this.handleButtonOnClick.bind(this);
        this.drugSelectionOnClick = this.drugSelectionOnClick.bind(this);
    };

    handleButtonOnClick() {
        this.foodNames = ['1', '2','Eggs','3'];
        console.log("click")
    }

    drugSelectionOnClick(){
        console.log("drug click")
    }

        render( ) {
            const foodNames = ['Meat', 'Seafood','Eggs','Nuts'];
           const drugNames = ['Zoloft', 'Adderall','Alprazolam','Cymbalta','Metoprolol','Lexapro','Viagra','Omeprazole'];
           const currentDrugName = "Lipitor 30mg";
           const {  } = this.props;
            return (
                <div className="div-home-container">

                    <Breadcrumb>
                        <BreadcrumbItem >Drug & Food Interaction App</BreadcrumbItem>
                    </Breadcrumb>

                        <DrugSelection
                            drugNames = { drugNames }
                            drugSelectionOnClick = {this.drugSelectionOnClick}
                        />
                        <DrugDisplay
                            currentDrugName = {currentDrugName}
                            foodNames = {foodNames}
                            handleButtonOnClick = {this.handleButtonOnClick}
                        />
                </div>
            );
        }
    };


// HomeContainer.PropTypes = {
//    xx: propTypes.String,
// };


