import React from 'react';
import {CardBody, ListGroup, ListGroupItem, Button} from 'reactstrap';
import '../components/drugDisplay.scss';

export default function  DrugDisplay (props){

      const { handleButtonOnClick, foodNames } = props;

        const foodList = foodNames.map(function (foodNames) {
            return <ListGroupItem>{foodNames}</ListGroupItem>
        });

        return (
            <div>
                    <CardBody>
                        Prescription Name:
                        <ListGroupItem>Lipitor 30mg</ListGroupItem>
                    </CardBody>

                    <CardBody>
                        Food Should be Avoid (when taking this medication):
                        <ListGroup>
                            {foodList}
                        </ListGroup>
                    </CardBody>

                    <div className="div-main-button">
                    <Button color="primary"
                        handleButtonOnClick = {handleButtonOnClick}
                    >Check Interaction</Button>
                    </div>
                </div>
        );
    }
