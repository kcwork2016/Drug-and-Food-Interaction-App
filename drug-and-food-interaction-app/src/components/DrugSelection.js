import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge  } from 'reactstrap';

export default class DrugSelection extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Drug List
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Drug1</DropdownItem>
                    <DropdownItem>Drug2</DropdownItem>
                    <DropdownItem>Drug3</DropdownItem>
                    <DropdownItem>Drug4</DropdownItem>
                    <DropdownItem>Drug5</DropdownItem>
                </DropdownMenu>
            </Dropdown>

                <Badge color="primary">Current Drug Name</Badge>
            </div>
        );
    }
}