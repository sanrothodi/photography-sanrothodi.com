import React from "react";
import sections from "./Sections";

import PortraitImage from "../media/Home/Portrait.jpg";
import LandscapeImage from "../media/Home/Landscape.jpg";

// Automatically import all files ending in *.jpg from the media/Home folder
// const imagesRequireContext = require.context("../media/Home", true, /\.jpg$/);

// Map section names to imported images
const imageMap = {
  Portrait: PortraitImage,
  Landscape: LandscapeImage,
  // Add more mappings as necessary
};

const HomeGridContent = ({section}) => {
    let link = `https://photography.sanrothodi.com/${section}`;
    let image = imageMap[section];
    // let image = imagesRequireContext(`./${section}.jpg`).default;
    let item =  `${section} Photography`;
    
    return(
            <div className="home-grid">
                <a href={link} className="work-titles">
                    <div><img className="image-size-home" src={image} alt={item}/></div>{item}</a>
            </div>
    )
};


export default HomeGridContent