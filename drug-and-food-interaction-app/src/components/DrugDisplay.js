import React from 'react';
import {ListGroup, ListGroupItem, Button} from 'reactstrap';
// import 'drugDisplay.css';

export default class Example extends React.Component {
    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem>Interaction Drug Name</ListGroupItem>
                    <ListGroupItem>Interaction Food Name</ListGroupItem>
                    <ListGroupItem>Infraction Indicator</ListGroupItem>

                </ListGroup>

                <Button color="primary">primary button</Button>{' '}


                </div>

        );
    }
}