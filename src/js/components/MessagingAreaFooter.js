import React from 'react';
import "../../css/messaging_area.css"

function MessagingAreaFooter() {
    return (
        <div className={"messaging-area-footer"}>
            <div className={"w-100 px-3"}>
                <textarea
                       className={"my-1 border text-light shadow-sm border-dark message-bar px-3"}
                placeholder={"Type a message."}/>
            </div>
        </div>
    );
}

export default MessagingAreaFooter;
