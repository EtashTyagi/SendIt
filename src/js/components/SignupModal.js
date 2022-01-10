import React from 'react';
import Button from "react-bootstrap/Button";
import {Form, Modal, Nav} from "react-bootstrap";

function SignupModal({ className, closeLogin, openLogin, closeSignup, openSignup, openState }) {

    return (
        <>
            <Nav.Link variant="primary" onClick={openSignup} className={className}>
                Signup
            </Nav.Link>

            <Modal show={openState.signupOpen} onHide={closeSignup}>
                <Modal.Header closeButton>
                    <Modal.Title>Register To Send It!</Modal.Title>
                </Modal.Header>
                <Form onSubmit={
                    (event) => {
                        event.preventDefault()
                        let formData = new FormData(event.target);
                        for (let [key, value] of formData.entries()) {
                            console.log(key, value);
                        }
                        fetch('https://etashtyagi.centralindia.cloudapp.azure.com/auth_api/signup/',
                            {
                                method: 'POST',
                                body: formData
                            })
                            .then(res => res.json()).then(result => console.log(result))
                    }} action={"#"}>
                    <Modal.Body className="d-flex flex-column">
                        <Form.Label className="d-flex flex-row align-items-center">
                            <span className="me-2 w-25">Email:</span>
                            <Form.Control name="email"
                                          className="w-75" type="email" placeholder="Enter email" required>
                            </Form.Control>
                        </Form.Label>
                        <Form.Label className="d-flex flex-row align-items-center">
                            <span className="me-2 w-25">Username:</span>
                            <Form.Control name="username"
                                          className="w-75" type="text" placeholder="Enter username" required>
                            </Form.Control>
                        </Form.Label>
                        <Form.Label className="d-flex flex-row align-items-center">
                            <span className="me-2 w-25">Name:</span>
                            <div className="w-75 d-flex flex-row">
                                <Form.Control name="first_name"
                                              className="w-50 me-1" type="text" placeholder="First Name" required>
                                </Form.Control>
                                <Form.Control name="last_name"
                                              className="w-50 ms-1" type="text" placeholder="Last Name" required>
                                </Form.Control>
                            </div>
                        </Form.Label>
                        <Form.Label className="d-flex flex-row align-items-center">
                            <span className="me-2 w-25">Password:</span>
                            <Form.Control name="password"
                                          className="w-75" type="password" placeholder="Enter password" required>
                            </Form.Control>
                        </Form.Label>
                        <Form.Label className="d-flex flex-row align-items-center">
                            <span className="me-2 w-25">Confirm:</span>
                            <Form.Control name="confirm"
                                          className="w-75" type="password" placeholder="Confirm password" required>
                            </Form.Control>
                        </Form.Label>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-primary" onClick={openLogin}>
                            Login
                        </Button>
                        <Button variant="secondary" type={"submit"}>
                            Signup
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default SignupModal;
