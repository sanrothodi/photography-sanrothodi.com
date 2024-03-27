import React from "react";

import Footer from "./Footer";



const Sidebar = () => {
    return(
        <div className="header">
            <header className="header-content">
                <a href="index.html">
                <h1 className="logo">SANRO THODI<br /><span className="professional"></span></h1>
                </a>
                <div className="desktop-menu">
                <a href="https://photography.sanrothodi.com" className="menu-items item-1">Home</a>
                <a href="https://photography.sanrothodi.com/portrait" className="menu-items item-2">Portrait</a>
                <a href="https://photography.sanrothodi.com/product" className="menu-items item-3">Product</a>
                <a href="https://photography.sanrothodi.com/wedding" className="menu-items item-4">Wedding</a>
                <a href="https://photography.sanrothodi.com/contact" className="menu-items item-5">Contact</a>
                <a href="https://photography.sanrothodi.com/about" className="menu-items item-6">About</a>
                </div>
                <div className="social-media">
                <ul>
                    <label className="twitter-circle">
                    <li><a className="social-icon-link" href="http://twitter.com/sanrothodi" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-40 -150 1000 1000" className="social-icon twitter">
                            <path fill="text-color"
                            d="M904 228q-37 54-90 93v23q0 73-21 145t-64 139-103 117-144 82-181 30q-151 0-276-81 19 3 43 3 126 0 224-77-59-2-105-36t-64-89q19 2 34 2 24 0 48-6-63-13-104-62T60 396v-2q38 21 82 23-37-25-59-64t-22-86q0-49 25-91 68 83 164 133t208 55q-5-21-5-41 0-75 53-127t127-53q79 0 132 57 61-12 114-44-20 64-79 100 52-6 104-28z">
                            </path>
                        </svg>
                        </a>
                    </li>
                    </label>
                    <label className="linkedin-circle">
                    <li><a className="social-icon-link" href="http://linkedin.com/in/sanrothodi" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-60 -150 1000 1000" className="social-icon linkedin">
                            <path fill="text-color"
                            d="M195 349v553H11V349h184zm12-171q0 41-29 68t-75 27h-1q-46 0-74-27T0 178t29-68 75-27 74 27 29 68zm650 407v317H674V606q0-59-23-92t-71-33q-35 0-58 19t-36 48q-6 17-6 45v309H296q1-223 1-361V376l-1-27h184v80h-1q11-18 23-31t31-29 49-24 64-9q95 0 153 63t58 186z">
                            </path>
                        </svg>
                        </a>
                    </li>
                    </label>
                    <label className="facebook-circle">
                    <li><a className="social-icon-link" href="http://facebook.com/sanrothodi" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -150 1000 1000" className="social-icon facebook">
                            <path fill="text-color" d="M570.5 310h144l-17 159h-127v460h-190V469h-95V310h95v-95c0-68 16-119.3 48-154s84.7-52 158-52h126v158h-79c-14.7 0-26.3 1.3-35 4s-15 7-19 13-6.3 12.3-7 19-1.3 16-2 28v79z"></path>
                        </svg>
                        </a>
                    </li>
                    </label>
                    <label className="px500-circle">
                    <li><a className="social-icon-link" href="http://500px.com/sanrothodi" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -150 1000 1000" className="social-icon px500">
                            <path fill="text-color"
                            d="M238.9 634.8c.2.5 4.6 12.8 7.2 18.9 14.1 33.4 34.4 63.5 60.2 89.3 25.8 25.8 55.8 46 89.3 60.2 34.6 14.7 71.4 22.1 109.3 22.1 37.9 0 74.7-7.4 109.3-22.1 33.4-14.1 63.5-34.4 89.3-60.2 25.8-25.8 46-55.8 60.2-89.3 14.7-34.6 22.1-71.4 22.1-109.3 0-37.9-7.4-74.7-22.1-109.3-14.1-33.4-34.4-63.5-60.2-89.3-25.8-25.8-55.8-46-89.3-60.2-34.6-14.7-71.4-22.1-109.3-22.1-38.4 0-76.7 7.6-110.8 22.1-27.3 11.5-73.5 41.3-100.6 69.2l-.2.2V123.7h388.3c14.1-.2 14.1-19.9 14.1-26.4s0-26.2-14.2-26.4H261.7c-11.4 0-18.5 9.5-18.5 18.3v325.3c0 10.5 13.1 18.1 25.2 20.7 23.7 5.1 29.2-2.5 35-10.5l.8-1.1c8.9-13.2 36.6-41.1 36.9-41.4 43.3-43.3 101.1-67.1 162.9-67.1 61.5 0 119.1 23.8 162.4 67.1 43.4 43.4 67.3 100.9 67.3 161.9 0 61.2-23.8 118.8-67 161.9-42.6 42.6-102.2 67.1-163.4 67.1-41.5 0-81.5-11-115.8-32l.1-197.8c0-26.4 11.4-55 30.6-76.7 21.9-24.8 52.1-38.4 85.1-38.4 31.9 0 61.7 12.1 83.9 34.1 22 21.8 34.2 50.9 34.2 81.9 0 66.1-52 117.9-118.3 117.9-12.8 0-36-5.7-37-5.9-13.4-4-19.1 14.6-21 20.7-7.2 23.6 3.6 28.3 5.9 29 21.4 6.6 35.4 7.9 53.7 7.9 93.7 0 169.9-76.2 169.9-170 0-93-76.2-168.6-169.8-168.6-45.8 0-88.9 17.5-121.3 49.3-30.8 30.3-48.5 70.7-48.5 110.9v1c-.2 5-.2 123.6-.3 162.5l-.2-.2c-17.6-19.5-35-49.3-46.6-79.8-4.5-12-14.7-9.8-28.7-5.5-6.1 1.9-24.6 7.6-20.5 21l.2.4zm199.6-46.5c.1 5.7 5.3 10.7 8.4 13.6l1 .9c5.3 5.2 10.4 7.9 15.1 7.9 3.9 0 6.3-1.8 7.1-2.6 2.3-2.2 28.9-29.1 31.4-31.7l29.6 29.5c2.7 3.1 5.7 4.6 9.2 4.7 4.7 0 9.9-2.8 15.3-8.4 12.8-13 6.4-20.1 3.3-23.5l-30-30 31.3-31.5c6.9-7.4.8-15.3-5.2-21.4-8.8-8.8-17.2-11-22.7-6L501.2 521l-31.5-31.5c-1.7-1.6-3.8-2.4-6.1-2.4-4.2 0-9.2 2.8-14.7 8.4-9.7 9.7-11.8 16.4-6.7 21.7l31.5 31.4-31.3 31.3c-2.6 2.7-3.9 5.5-3.9 8.4zm68.6-425.4c-50.3 0-103.8 10.2-143.1 27.2-4.2 1.6-6.7 5-7.3 9.8-.5 4.5.7 10.4 3.7 18.1 2.4 6.2 8.9 22.8 21.5 18 40.2-15.3 84.7-23.8 125.3-23.8 45.9 0 90.5 9 132.4 26.7 33.3 14.1 64.7 34.4 98.9 64.1 2.5 2.2 5.1 3.3 7.9 3.3 6.7 0 13.1-6.5 18.5-12.7 9.1-10.2 15.4-18.7 6.4-27.3-32.6-30.9-68.4-54-112.5-72.7-48.2-20.4-99.2-30.7-151.7-30.7zm271.1 621.3c-6.1-6-11.2-9.6-15.7-10.9-4.6-1.3-8.7-.3-11.8 2.8l-3 3c-31.2 31.2-67.5 55.7-107.9 72.8-41.8 17.7-86.3 26.7-132.1 26.7s-90.3-9-132.1-26.7c-40.4-17.1-76.7-41.6-107.9-72.8-32.5-32.5-57-68.8-72.8-107.9-15.4-38.1-20.4-66.8-22.1-76.3-.2-.9-.3-1.6-.4-2.1-2.1-11.1-12.3-11.9-27-9.6-6.1.9-24.7 3.8-22.9 17.1v.3c4.9 30.9 13.6 61.3 25.8 90.2 19.6 46.4 47.8 88.1 83.6 123.9 35.8 35.8 77.5 63.9 124 83.6C404 918.6 455.1 929 507.7 929c52.6 0 103.7-10.3 151.8-30.7 46.4-19.6 88.1-47.8 124-83.6.1-.1 2-2 3.1-3.2 3.8-4.2 7.2-11.7-8.4-27.3z">
                            </path>
                        </svg>
                        </a>
                    </li>
                    </label>
                    <label className="instagram-circle">
                    <li><a className="social-icon-link" href="http://instagram.com/sanrothodi" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-70 -150 1000 1000" className="social-icon instagram">
                            <path fill="text-color"
                            d="M571 500q0-59-41-101t-101-42-101 42-42 101 42 101 101 42 101-42 41-101zm77 0q0 91-64 156t-155 64-156-64-64-156 64-156 156-64 155 64 64 156zm61-229q0 21-15 36t-37 15-36-15-15-36 15-36 36-15 37 15 15 36zM429 148H327l-54 2-57 5-40 11q-28 11-49 32t-33 49q-6 16-10 40t-6 58-1 53 0 59 0 43 0 43 0 59 1 53 6 58l10 40q12 28 33 49t49 32q16 6 40 11t57 5 54 2 59 0 43 0 42 0 59 0 54-2 58-5 39-11q28-11 50-32t32-49q6-16 10-40t6-58 1-53 0-59 0-43 0-43 0-59-1-53-6-58l-10-40q-11-28-32-49t-50-32q-16-6-39-11t-58-5-54-2-59 0-42 0zm428 352q0 128-3 177-5 116-69 180t-179 69q-50 3-177 3t-177-3q-116-6-180-69T3 677q-3-49-3-177t3-177q5-116 69-180t180-69q49-3 177-3t177 3q116 6 179 69t69 180q3 49 3 177z">
                            </path>
                        </svg>
                        </a>
                    </li>
                    </label>
                </ul>
                </div>

                <Footer />

            </header>


        </div>

        )
    };
    
    
    export default Sidebar