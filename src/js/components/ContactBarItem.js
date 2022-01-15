import React from 'react';
import {Image} from "react-bootstrap";
import reactImage from "../../res/NINTCHDBPICT000005403160.webp"
import "../../css/contacts_bar.css"

function ContactBarItem({ contact }) {
    let loadingTag = contact.loading ? " loading" : ""
    return (
        <div className="contacts-item p-2">
            {contact.loading ? <div className={"contacts-item-img buffering"}/>:
                <Image className="contacts-item-img" src={reactImage}/>
            }
            <div className="contacts-info-holder ps-2">
                <span className={`h5 contacts-name${loadingTag}`}>{contact.name}</span>
                <span className={`h6 mt-1 contacts-status${loadingTag}`}>{contact.status}</span>
            </div>
        </div>
    );
}

export default ContactBarItem;
