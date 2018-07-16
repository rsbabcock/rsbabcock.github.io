import React, { Component } from "react";
import {Modal, Button} from 'react-bootstrap'

class ContactModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {

        return (
            <div>
                <Button bsStyle="light" bsSize="small" onClick={this.handleShow}>
                    <a>Contact</a>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Body>
                        <h4>rachael.s.babcock@gmail.com</h4>
                        <h4> 615-967-0606 </h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default ContactModal;