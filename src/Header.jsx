// import React from "react";
// import { Link } from "react-router-dom";
// import sections from "./Sections";

// let Home = `Home`
// let item2 = `Contact`
// let item3 = `About`


// const baseURL = `https://photography.sanrothodi.com`;
// let link2 = `${baseURL}/${item2.toLowerCase()}`;
// let link3 = `${baseURL}/${item3.toLowerCase()}`;

// let link = `https://photography.sanrothodi.com/${sections}`;
// let itemSection =  `${sections}`;

// const Menu = () => {    

//     const sectionLinks = sections.map((section, index) => (
//         <Link key={index} to={`${baseURL}/${section.toLowerCase()}`} className={`menu-items item-${index +2}`}>
//           {section}
//         </Link>

//       ));

//     return(
//         <div className="desktop-menu">
//             <a href={baseURL} className="menu-items item-1">{Home}</a>
//             {sectionLinks}
//             <a href={link2} className="menu-items item-5">{item2}</a>
//             <a href={link3} className="menu-items item-6">{item3}</a>
//         </div>
//         )
//     };
    
    
//     export default Menu




import React from "react";
import { Link } from "react-router-dom";
import sections from "./Sections";

const Menu = () => {
  // Note: Assuming 'sections' is an array like ['Portfolio', 'Services']
  const sectionLinks = sections.map((section, index) => (
    <Link key={index} to={`/${section.toLowerCase()}`} className={`menu-items item-${index + 2}`}>
      {section}
    </Link>
  ));

  return (
    <div className="desktop-menu">
      <Link to="/" className="menu-items item-1">Home</Link>
      {sectionLinks}
      <Link to="/contact" className="menu-items item-5">Contact</Link>
      <Link to="/about" className="menu-items item-6">About</Link>
    </div>
  );
};

export default Menu;
