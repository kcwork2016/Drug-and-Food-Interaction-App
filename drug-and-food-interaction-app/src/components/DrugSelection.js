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
        return (
            <div>
                <Row>
                    <Col>
                        <Badge color="primary">Current Drug Name</Badge>
                    </Col>

                    <Col>
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

                                {/*<DropdownItem*/}
                                    {/*{this.props.drugList.map(function (drugName) {*/}
                                        {/*return <DropdownItem>{drugName}</DropdownItem>;*/}
                                    {/*})}*/}
                                {/*/>*/}

                            </DropdownMenu>
                        </Dropdown>
                    </Col>

                </Row>
            </div>

            // {friends.map(p => <li key={p.id}>{p.name}</li>)}

        );
    }
}