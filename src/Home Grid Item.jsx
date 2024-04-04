import React from "react";
import { Link } from "react-router-dom";
import Image1 from "./media/Home/Portrait.jpg";
import Image2 from "./media/Home/Product.jpg";
import Image3 from "./media/Home/Wedding.jpg";
import Image4 from "./media/Home/Corporate.jpg";


// Automatically import all files ending in *.jpg from the media/Home folder
// const imagesRequireContext = require.context("../media/Home", true, /\.jpg$/);

// Map section names to imported images
const imageMap = {
  Portrait: Image1,
  Product: Image2,
  Wedding: Image3,
  Corporate: Image4,
  // Add more mappings as necessary
  
};

const HomeGridContent = ({section}) => {
    let link = `/${section}`;
    let image = imageMap[section];
    // let image = imagesRequireContext(`./${section}.jpg`).default;
    let item =  `${section} Photography`;
    
    return(
            <div className="home-grid">
                <Link to={link} className="work-titles">
                    <div><img className="image-size-home" src={image} alt={item}/></div>{item}</Link>
            </div>
    )
};


export default HomeGridContent