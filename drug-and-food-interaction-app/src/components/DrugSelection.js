import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Badge, Row, Col  } from 'reactstrap';

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

        const drugNames = ['Drug1', 'Drug2','Drug1','Drug1','Drug1','Drug1','Drug1','Drug1','Drug1','Drug1'];

        const drugList = drugNames.map(function (drugNames) {
            return <DropdownItem>{drugNames}</DropdownItem>
        });


        return (
            <div>
                <Row>
                    <Col>
                        <Badge color="primary">Available Prescription</Badge>
                    </Col>

                    <Col>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret>
                                Drug List
                            </DropdownToggle>
                            <DropdownMenu>
                          {drugList}
                            </DropdownMenu>
                        </Dropdown>
                    </Col>

                </Row>
            </div>
        );
    }
}