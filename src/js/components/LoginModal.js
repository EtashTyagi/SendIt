import React from 'react';
import Button from "react-bootstrap/Button";
import {Form, Modal, Nav} from "react-bootstrap";

function LoginModal({ className, closeLogin, openLogin, closeSignup, openSignup, openState }) {

    return (
        <>
            <Nav.Link variant="primary" onClick={openLogin} className={className}>
                Login
            </Nav.Link>

            <Modal show={openState.loginOpen} onHide={closeLogin}>
                <Modal.Header closeButton>
                    <Modal.Title>Login To Send It!</Modal.Title>
                </Modal.Header>
                <Form>
                    <Modal.Body className="d-flex flex-column">
                        <Form.Label className="d-flex flex-row align-items-center">
                            <span className="me-2 w-25">Email:</span>
                            <Form.Control className="w-75" type="email" placeholder="Enter email" required>
                            </Form.Control>
                        </Form.Label>
                        <Form.Label className="d-flex flex-row align-items-center">
                            <span className="me-2 w-25">Password:</span>
                            <Form.Control className="w-75" type="password" placeholder="Enter password" required>
                            </Form.Control>
                        </Form.Label>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={openSignup}>
                            Signup
                        </Button>
                        <Button variant="primary" type={"submit"}>
                            Login
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default LoginModal;
