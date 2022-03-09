import React, {useState} from 'react';
import ContactsBar from "./ContactsBar";
import "../../css/main_display.css"
import MessagingArea from "./MessagingArea";

function MainDisplay({ contactState }) {
    const contacts = [
        {id: 0, name: "EtashTyagi", status: "Just Testing", loading: false},
        {id: 1, name:`<script>alert("XSS")</script>`, status: "", loading: false},
        {id: 2, name:"", status: "", loading: true},
        {id: 3, name:"", status: "", loading: true},
        {id: 4, name:"", status: "", loading: true},
        {id: 5, name:"", status: "", loading: true},
        {id: 6, name:"", status: "", loading: true},
        {id: 7, name:"", status: "", loading: true},
        {id: 8, name:"", status: "", loading: true},
        {id: 9, name:"", status: "", loading: true},
        {id: 10, name:"", status: "", loading: true},
        {id: 11, name:"", status: "", loading: true},
        {id: 12, name:"", status: "", loading: true},
        {id: 13, name:"", status: "", loading: true},
        {id: 14, name:"", status: "", loading: true},
        {id: 15, name:"", status: "", loading: true},
        {id: 16, name:"", status: "", loading: true},
        {id: 17, name:"", status: "", loading: true},
        {id: 18, name:"", status: "", loading: true},
        {id: 19, name:"", status: "", loading: true}]
    const [curContact, setCurContact] = useState(contacts[0])

    return (
        <div className="main-display">
            <ContactsBar contacts={contacts} contactState={contactState}
                         setCurContact={setCurContact} curContact={curContact}/>
            <MessagingArea activeContact={curContact}/>
        </div>
    );
}

export default MainDisplay;
