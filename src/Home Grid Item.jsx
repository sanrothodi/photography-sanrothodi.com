import React from "react";

const HomeGridContent = ({section}) => {
    let link = "https://photography.sanrothodi.com/" + section;
    let image = "media/home/" + section + ".jpg";
    let item =  section + ' Photography';
    
    return(
            <div className="home-grid">
                <a href={link} className="work-titles">
                    <div><img className="image-size-home" src={image} alt={item}/></div>{item}</a>
            </div>
    )
};


export default HomeGridContent