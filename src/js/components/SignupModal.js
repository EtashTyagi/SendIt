import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {Form, Modal, Nav} from "react-bootstrap";
import signupHandler from "../utils/signupHandler";
import Loading from "./Loading";

const stringToComponent = [
    "defaultSignupModal",
    "waitingSignupModal",
    "errorSignupModal",
]

function SignupModal({ className, closeLogin, openLogin, closeSignup, openSignup, openState }) {
    const [rendering, setRendering] = useState("defaultSignupModal")
    const [error, setError] = useState("")
    return (
        rendering === stringToComponent[0] ? <DefaultSignupModal className={className}
                                                                 setRendering={setRendering}
                                                                 openLogin={openLogin}
                                                                 closeSignup={closeSignup}
                                                                 openSignup={openSignup}
                                                                 openState={openState}
                                                                 setError={setError}/> :
        rendering === stringToComponent[1] ? <WaitingSignupModal className={className}/> :
        rendering === stringToComponent[2] ? <ErrorSignupModal className={className}
                                                               setRendering={setRendering}
                                                               openState={openState}
                                                               closeSignup={closeSignup}
                                                               openSignup={openSignup}
                                                               error={error}/> :
        <></>
    )

}

function DefaultSignupModal({ className, setRendering, openLogin, closeSignup, openSignup, openState, setError }) {
    return (
        <>
            <Nav.Link variant="primary" onClick={openSignup} className={className}>
                Signup
            </Nav.Link>

            <Modal show={openState.signupOpen} onHide={closeSignup} className={"shadow"}>
                <Modal.Header closeButton>
                    <Modal.Title>Register To Send It!</Modal.Title>
                </Modal.Header>
                <Form onSubmit={(event) =>
                {signupHandler(event, setRendering, setError)}} action={"#"}>
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
function WaitingSignupModal({ className }) {
    return (
    <>
        <Nav.Link variant="primary" className={className}>
            Signup
        </Nav.Link>

        <Modal show={true} className={"shadow"}>
            <Modal.Header>
                <Modal.Title>Registering, Please Wait!</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column">
                <Loading/>
            </Modal.Body>
        </Modal>
    </>)
}
function ErrorSignupModal({ className, setRendering, openState, closeSignup, openSignup, error }) {
    return (
        <>
            <Nav.Link variant="primary" className={className}
                      onClick={() => {setRendering("defaultSignupModal"); openSignup()}}>
                Signup
            </Nav.Link>

            <Modal className={"shadow dark-modal"} show={openState.signupOpen} onHide={closeSignup} >
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

export default SignupModal;
