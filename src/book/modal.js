import React, { Component } from "react";
import {Modal, Button} from 'react-bootstrap'
import phone from '../img/util/phone.svg'
import email from '../img/util/email.svg'
import close from '../img/util/window-close.svg'
import './modal.css'

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

                <Modal show={this.state.show} onHide={this.handleClose} className="action">
                    <Modal.Body className="action">
                    <h4>
                        <a href="tel:615-967-0606"><img src={phone} alt="phone" />615-967-0606</a>
                    </h4>
                    <h4>                       
                        <a href="mailto:rachael.s.babcock@gmail.com"><img src={email} alt="email" />rachael.s.babcock@gmail.com</a>
                    </h4>
                    </Modal.Body>
                    <Modal.Footer>
                        <img onClick={this.handleClose} src={close} alt="close"/>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default ContactModal;