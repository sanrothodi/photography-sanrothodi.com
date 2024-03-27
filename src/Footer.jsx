import React from "react";

const date = new Date();
const year = date.getFullYear();
const companyName = 'Sanro Thodi';

const Footer = () => {
    return(
        <>
        <div className="footer">
        <div className="contact">
            <p>Contact me by e-mail:<br /><a className="contact-email" href="mailto:sanrothodi@protonmail.com">sanrothodi@protonmail.com</a></p>
        </div>
        <div className="copyright">© {year} {companyName}. All rights REServed.</div>
        </div>
        <div className="scrollup-desktop" onclick="scrollToTop()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="scrollup" viewBox="-3 -2.5 22 22">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
        </svg>
        </div>

        <div className="floating-footer ">
        <div onclick="scrollToTop()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="scrollup" viewBox="-3 -2.5 22 22">
            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
            </svg>
        </div>
        <div className="copyright">© {year} {companyName}. All rights reserved.</div>
        </div>
        </>
    )
};



export default Footer