import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {Form, Modal, Nav} from "react-bootstrap";
import { signup, handleFormChange } from "../utils/signupHandler";
import Loading from "./Loading";

const stringToComponent = [
    "defaultSignupModal",
    "errorSignupModal",
    "successSignupModal"
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
        rendering === stringToComponent[1] ? <ErrorSignupModal className={className}
                                                               setRendering={setRendering}
                                                               openState={openState}
                                                               closeSignup={closeSignup}
                                                               openSignup={openSignup}
                                                               error={error}/> :
        rendering === stringToComponent[2] ? <SuccessSignupModal className={className}
                                                                 setRendering={setRendering}
                                                                 openState={openState}
                                                                 closeSignup={closeSignup}
                                                                 openSignup={openSignup}
                                                                 openLogin={openLogin}/> :
        <></>
    )

}

function DefaultSignupModal({ className, setRendering, openLogin, closeSignup, openSignup, openState, setError }) {
    const [validationErrors, setValidationErrors] = useState({
        email: [false, "Please fill out this field."],
        username: [false, "Please fill out this field."],
        first_name: [false, "Please fill out this field."],
        last_name: [false, "Please fill out this field."],
        password: [false, "Please fill out this field."],
        confirm: [false, "Please fill out this field."]
    })
    const [signupFields, setSignupFields] = useState({
        email: "",
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm: ""
    })
    const [loading, setLoading] = useState(false)
    return (
        <>
            <Nav.Link variant="primary" onClick={openSignup} className={className}>
                Signup
            </Nav.Link>

            <Modal show={openState.signupOpen} onHide={closeSignup} className={"shadow"}>
                <Modal.Header closeButton>
                    <Modal.Title>Register To Send It!</Modal.Title>
                    {loading ? <Loading/> :<div/>}
                </Modal.Header>
                <Form onSubmit={(event) =>
                {signup(event, setRendering, setError, setValidationErrors, setLoading)}} action={"#"}
                noValidate>
                    <Modal.Body className="d-flex flex-column">
                        <Form.Group className="d-flex flex-row align-items-center flex-wrap">
                            <Form.Label className="w-25">Email:</Form.Label>
                            <Form.Control name="email" className="w-75" type="email" isValid={validationErrors.email[0]}
                                          value={signupFields.email}
                                          isInvalid={!validationErrors.email[0]}
                                          onChange={event => handleFormChange(event, setSignupFields,
                                              setValidationErrors)}
                                          placeholder="Enter email" required>
                            </Form.Control>
                            <div className="w-25"/>
                            <Form.Control.Feedback className="w-75">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className="w-75">
                                {validationErrors.email[1]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="d-flex flex-row align-items-center flex-wrap mt-1">
                            <Form.Label className="w-25">Username:</Form.Label>
                            <Form.Control name="username" isInvalid={!validationErrors.username[0]}
                                          value={signupFields.username}
                                          isValid={validationErrors.username[0]}
                                          onChange={event => handleFormChange(event, setSignupFields,
                                              setValidationErrors)}
                                          className="w-75" type="text" placeholder="Enter username" required>
                            </Form.Control>
                            <div className="w-25"/>
                            <Form.Control.Feedback className="w-75">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className="w-75">
                                {validationErrors.username[1]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="d-flex flex-row align-items-center flex-wrap mt-1">
                            <Form.Label className="w-25">Name:</Form.Label>
                            <Form.Control name="first_name" className="me-1" type="text" placeholder="First Name"
                                          style={{width: "calc(37.5% - 0.25rem)"}}
                                          isInvalid={!(validationErrors.first_name[0] && validationErrors.last_name[0])}
                                          onChange={event => handleFormChange(event, setSignupFields,
                                              setValidationErrors)}
                                          value={signupFields.first_name}
                                          isValid={validationErrors.first_name[0] && validationErrors.last_name[0]} required>
                            </Form.Control>
                            <Form.Control name="last_name" className="ms-1" type="text" placeholder="Last Name"
                                          style={{width: "calc(37.5% - 0.25rem)"}}
                                          isInvalid={!(validationErrors.first_name[0] && validationErrors.last_name[0])}
                                          onChange={event => handleFormChange(event, setSignupFields,
                                              setValidationErrors)}
                                          value={signupFields.last_name}
                                          isValid={validationErrors.first_name[0] && validationErrors.last_name[0]} required>
                            </Form.Control>
                            <div className="w-25"/>
                            <Form.Control.Feedback className="w-75">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className="w-75">
                                {validationErrors.first_name[0]?validationErrors.last_name[1]:validationErrors.first_name[1]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="d-flex flex-row align-items-center flex-wrap mt-1">
                            <Form.Label className="w-25">Password:</Form.Label>
                            <Form.Control name="password" isInvalid={!validationErrors.password[0]}
                                          isValid={validationErrors.password[0]}
                                          onChange={event => handleFormChange(event, setSignupFields,
                                              setValidationErrors)}
                                          value={signupFields.password}
                                          className="w-75" type="password" placeholder="Enter password" required>
                            </Form.Control>
                            <div className="w-25"/>
                            <Form.Control.Feedback className="w-75">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className="w-75">
                                {validationErrors.password[1]}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="d-flex flex-row align-items-center flex-wrap mt-1">
                            <Form.Label className="w-25">Confirm:</Form.Label>
                            <Form.Control name="confirm" isInvalid={!validationErrors.confirm[0]}
                                          isValid={validationErrors.confirm[0]} value={signupFields.confirm}
                                          onChange={event => handleFormChange(event, setSignupFields,
                                              setValidationErrors)}
                                          className="w-75" type="password" placeholder="Confirm password" required>
                            </Form.Control>
                            <div className="w-25"/>
                            <Form.Control.Feedback type={"valid"} className="w-75">Looks good!</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid" className="w-75">
                                {validationErrors.confirm[1]}
                            </Form.Control.Feedback>
                        </Form.Group>

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

function ErrorSignupModal({ className, setRendering, openState, closeSignup, openSignup, error }) {
    return (
        <>
            <Nav.Link variant="primary" className={className}
                      onClick={() => {setRendering("defaultSignupModal"); openSignup()}}>
                Signup
            </Nav.Link>

            <Modal className={"shadow danger-modal"} show={openState.signupOpen} onHide={closeSignup} >
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
function SuccessSignupModal({ className, setRendering, openState, closeSignup, openSignup, openLogin }) {
    return (
        <>
            <Nav.Link variant="primary" className={className}
                      onClick={() => {setRendering("defaultSignupModal"); openSignup()}}>
                Signup
            </Nav.Link>

            <Modal className={"shadow success-modal"} show={openState.signupOpen} onHide={closeSignup} >
                <Modal.Header closeButton>
                    <Modal.Title>Welcome To Send It!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column">
                    User Created Successfully!<br/>
                    Login To Continue!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="shadow-sm" onClick={openLogin}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SignupModal;
