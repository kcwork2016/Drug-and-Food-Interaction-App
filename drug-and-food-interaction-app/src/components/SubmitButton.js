import React from 'react';
import { Button } from 'react-bootstrap';


export default function SubmitButton (props) {
    return (
        <div>
            // display on last page
            <Button color="success">Finish</Button>

            //display on every page except the last page
            <Button color="primary">Next</Button>

        </div>
    );
};
