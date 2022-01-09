import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import "../../css/top_navbar.css"
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

function TopNavbar(props) {
    const [openState, setOpenState] = useState({
        "loginOpen": false,
        "signupOpen": false
    });
    const openLogin = () => {
        setOpenState({
            "loginOpen": true,
            "signupOpen": false
        });
    }
    const closeLogin = () => {
       setOpenState({
           "loginOpen": false,
           "signupOpen": openState.signupOpen
       })
    }
    const openSignup = () => {
        setOpenState({
            "loginOpen": false,
            "signupOpen": true
        });
    }
    const closeSignup = () => {
        setOpenState({
            "loginOpen": openState.loginOpen,
            "signupOpen": false
        })
    }

    return (
        <Navbar expand="lg" className="shadow navbar-custom" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Send It!</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LoginModal className={"navbar-btn"} closeSignup={closeSignup} openSignup={openSignup}
                                    closeLogin={closeLogin} openLogin={openLogin} openState={openState}/>
                        <SignupModal className={"navbar-btn"} closeSignup={closeSignup} openSignup={openSignup}
                                     closeLogin={closeLogin} openLogin={openLogin} openState={openState}/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;
