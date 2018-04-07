import React from 'react';
import { Panel, DropdownButton, MenuItem  } from 'react-bootstrap';
import '../css/bootstrap-theme.min.css';


export default function DrugDisplay (props) {
const { title, index} = props;
        return (
            <DropdownButton
                bsStyle={title.toLowerCase()}
                title={title}
                key={index}
                id={`dropdown-basic-${index}`}
            >
                <MenuItem eventKey="1">Drug1</MenuItem>
                <MenuItem eventKey="2">Drug2</MenuItem>
                <MenuItem eventKey="3" active>
                    Active Item
                </MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="4">Drug3</MenuItem>
            </DropdownButton>
        );
}

DrugDisplay.propTypes = {
    title: propTypes.String,
    index: propTypes.String
};