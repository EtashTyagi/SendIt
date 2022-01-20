import React from 'react';
import "../../css/contacts_bar.css"

function SearchBar({ className }) {
    return (
        <div className={className} style={{borderBottom: "solid 1px var(--bs-gray-600)"}}>
            <input type={"text"}
                   className={"my-1 border text-light shadow-sm border-dark search-bar ps-5"}/>
        </div>
    );
}

export default SearchBar;
