import React from 'react';
import {CardBody, ListGroup, ListGroupItem, Button} from 'reactstrap';
import '../components/drugDisplay.scss';

export default class Example extends React.Component {
    render() {
        return (
            <div>

                <CardBody>
                    Prescription Name:
                    <ListGroupItem>Interaction Drug Name</ListGroupItem>
                </CardBody>

                <CardBody>
                    Drug and Food Interaction Info:
                    <ListGroup>
                    <ListGroupItem>Interaction Drug Name</ListGroupItem>
                    <ListGroupItem>Interaction Drug Name</ListGroupItem>
                    </ListGroup>
                </CardBody>

                <div className="div-main-button">
                <Button color="primary">primary button</Button>{' '}
                </div>


                </div>

        );
    }
}