import React from 'react';
import ContactBarItem from "./ContactBarItem";
import "../../css/contacts_bar.css"
import SearchBar from "./SearchBar";

function ContactsBar({ contacts, contactState, setCurContact, curContact }) {
    let classVisibility = (contactState ? " visible": " hidden")
    return (
        <div className={`shadow${classVisibility} contacts-main-bar`}>
            <SearchBar className={"w-100 ps-1 pe-2 py-2 shadow-sm"}/>
            <div className={"contacts-body-bar"}>
                {contacts.map(contact => <ContactBarItem contact={contact} key={contact.id}
                                                         active={curContact.id === contact.id}
                                                         onClick={() => {setCurContact(contact)}}/>)}
            </div>
        </div>

    );
}

export default ContactsBar;
