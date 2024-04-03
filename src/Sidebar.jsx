import React from "react";
import Menu from "./Header";
import Footer from "./Footer";
import SocialMedia from "./Social Media";



const Sidebar = () => {
    return(

        <div className="header">
            <header className="header-content">
                <a href="index.html">
                <h1 className="logo">SANRO THODI<br /><span className="professional"></span></h1>
                </a>
                <Menu />
                <SocialMedia />
                <Footer />
            </header>
        </div>

        )
    };
    
    
    export default Sidebar