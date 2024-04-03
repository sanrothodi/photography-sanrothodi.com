import React from "react";

let date = new Date();
let year = date.getFullYear();
let companyName = 'Sanro Thodi';
let copyright = `© ${year} ${companyName}. All rights reserved.`;

const FloatingFooter = () => {
    return(
        <div className="floating-footer">
        <div onclick="scrollToTop()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="scrollup" viewBox="-3 -2.5 22 22">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
        </div>
        <div className="copyright">{copyright}</div>
        </div>
    )
};



export default FloatingFooter