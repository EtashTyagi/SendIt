import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {Form, Modal, Nav} from "react-bootstrap";
import {login} from "../utils/loginHandler";

const stringToComponent = [
    "defaultLoginModal",
    "errorLoginModal",
    "successLoginModal"
]

function LoginModal({ className, closeLogin, openLogin, closeSignup, openSignup, openState }) {
    const [rendering, setRendering] = useState("defaultLoginModal")
    return (
        rendering === stringToComponent[0] ? <DefaultLoginModal className={className}
                                                                 setRendering={setRendering}
                                                                 openLogin={openLogin}
                                                                 closeLogin={closeLogin}
                                                                 openSignup={openSignup}
                                                                 openState={openState}/> :
        rendering === stringToComponent[1] ? <ErrorLoginModal className={className}
                                                               setRendering={setRendering}
                                                               openState={openState}
                                                              openLogin={openLogin}
                                                              closeLogin={closeLogin}/> :
                        <></>
    );
}

function DefaultLoginModal({ className, setRendering, openLogin, closeLogin, openSignup, openState }) {
    const [error, setError] = useState(false)
    return (
        <>
            <Nav.Link variant="primary" onClick={openLogin} className={className}>
                Login
            </Nav.Link>

            <Modal show={openState.loginOpen} onHide={closeLogin} className={"shadow"}>
                <Modal.Header closeButton>
                    <Modal.Title>Login To Send It!</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(event) =>
                {login(event, setError, setRendering)}} action={"#"}>
                    <Modal.Body className="d-flex flex-column">
                        <Form.Group className="d-flex flex-row align-items-center flex-wrap">
                            <Form.Label className="w-25">Username:</Form.Label>
                            <Form.Control className="w-75" type="text" placeholder="Enter username"
                                          isInvalid={error}
                                          name="username" required>
                            </Form.Control>
                            <div className="w-25"/>
                            <Form.Control.Feedback className="w-75"/>
                            <Form.Control.Feedback type="invalid" className="w-75">
                                Authentication Failed
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="d-flex flex-row align-items-center flex-wrap mt-1">
                            <Form.Label className="w-25">Password:</Form.Label>
                            <Form.Control className="w-75" type="password" placeholder="Enter password"
                                          isInvalid={error}
                                          name={"password"} required>
                            </Form.Control>
                            <div className="w-25"/>
                            <Form.Control.Feedback className="w-75"/>
                            <Form.Control.Feedback type="invalid" className="w-75">
                                Authentication Failed
                            </Form.Control.Feedback>
                        </Form.Group>
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

function ErrorLoginModal({ className, setRendering, openState, closeLogin, openLogin, error }) {
    return (
        <>
            <Nav.Link variant="primary" className={className}
                      onClick={() => {setRendering("defaultLoginModal"); openLogin()}}>
                Login
            </Nav.Link>

            <Modal className={"shadow danger-modal"} show={openState.signupOpen} onHide={closeLogin} >
                <Modal.Header closeButton>
                    <Modal.Title>Error Occurred While Registering</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column">
                    {error}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginModal;
