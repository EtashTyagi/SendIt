import React, {useState} from 'react';
import {Image, Nav, Navbar} from "react-bootstrap";
import "../../css/top_navbar.css"
import contactsImg from "../../res/contacts_white_24dp.svg"
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import {isLoggedIn} from "../utils/loginHandler";

function TopNavbar({ toggleContacts }) {
    const [openState, setOpenState] = useState({
        "loginOpen": false,
        "signupOpen": false
    });
    const [loggedIn, setLoggedIn] = useState(false)
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
    isLoggedIn().then(value => {setLoggedIn(value)})
    return (
        <Navbar expanded className="shadow-sm navbar-custom" variant="dark">
            <div className="mx-2 d-flex flex-row w-100 align-items-center">
                <Navbar.Brand href="#home" className="ps-2">Send It!</Navbar.Brand>
                <Nav className="me-auto">
                    {loggedIn ? <span>{loggedIn}</span> :
                        <>
                            <LoginModal className={"navbar-btn"} closeSignup={closeSignup} openSignup={openSignup}
                                        closeLogin={closeLogin} openLogin={openLogin} openState={openState}/>
                            <SignupModal className={"navbar-btn"} closeSignup={closeSignup} openSignup={openSignup}
                                         closeLogin={closeLogin} openLogin={openLogin} openState={openState}/>
                        </>
                    }
                </Nav>
                <Image className={"navbar-btn-contacts"} src={contactsImg} onClick={toggleContacts}/>
            </div>
        </Navbar>
    );
}

export default TopNavbar;
