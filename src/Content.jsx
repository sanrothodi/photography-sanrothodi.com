import React from "react";
import HomeGridContent from "./Home Grid Item";
import sections from "./Sections";

const MainContent = () => {
    return(
        <div className="sections">
            <div className="work">
                {sections.map((section, index) => (
                    <HomeGridContent key={index} section={section} />
                ))}
            </div>
        </div>
    )
};


export default MainContent