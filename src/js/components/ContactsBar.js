import React from 'react';
import ContactBarItem from "./ContactBarItem";
import "../../css/contacts_bar.css"

function ContactsBar({ contacts }) {
    return (
        <div className="contacts-main-bar shadow">
            {contacts.map(contact => <ContactBarItem contact={contact} key={contact.id}/>)}
        </div>
    );
}

export default ContactsBar;
