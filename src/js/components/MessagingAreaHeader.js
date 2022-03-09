import React from 'react';
import "../../css/messaging_area.css"
import "../../css/contacts_bar.css"
import {Image} from "react-bootstrap";
import reactImage from "../../res/2_results.png";

function MessagingAreaHeader({ contact }) {
    let loadingTag = contact.loading ? " loading" : ""
    return (
        <div className={`messaging-area-header`}>
            {contact.loading ? <div className={"contacts-item-img buffering"}/>:
                <Image className="contacts-item-img" src={reactImage}/>
            }
            <div className="contacts-info-holder ps-2">
                <span className={`h5 contacts-name${loadingTag}`}>{contact.name}</span>
                <span className={`h6 contacts-status${loadingTag} mt-1`}>{contact.loading?"":"Online"}</span>
            </div>
        </div>
    );
}

export default MessagingAreaHeader;
