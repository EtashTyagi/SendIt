import React from 'react';
import "../../css/messaging_area.css"
import MessagingAreaHeader from "./MessagingAreaHeader";
import MessagingAreaBody from "../../css/MessagingAreaBody";
import MessagingAreaFooter from "./MessagingAreaFooter";

function MessagingArea({ activeContact }) {
    return (
        <div className="messaging-area">
            <MessagingAreaHeader contact={activeContact}/>
            <MessagingAreaBody/>
            <MessagingAreaFooter/>
        </div>
    );
}

export default MessagingArea;
