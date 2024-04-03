import React from "react";
import Menu from "./Header";
import SocialMedia from "./Social Media";
import Collapsible from "./Collapsible";


const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar-logo">
            <a href="index.html">
                <h1 className="logo">SANRO THODI<br /><span className="professional"></span></h1>
            </a>
            </div>
            <div className="collapsible" onClick={Collapsible}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="menu-icon" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
            <div className="nabvar-collapsible">
            <div className="navbar-menu"> 
            <Menu />
            </div>
            <div className="navbar-social-media">
            <SocialMedia />
            </div>
            </div>
        </div>
    )
};


export default Navbar