import React from 'react';
import ContactsBar from "./ContactsBar";

function MainDisplay(props) {
    const contacts = [{id: 1, name: "EtashTyagi", status: "Just Testing", loading: false},
        {id: 0, name:"", status: "", loading: true}]
    return (
        <div className="w-100 h-100 d-flex flex-row">
            <ContactsBar contacts={contacts}/>
        </div>
    );
}

export default MainDisplay;
