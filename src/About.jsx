import React from 'react';

import ImageAbout from "./media/Home/About.jpg";


const About = () => {

  return (
    <div className="about-page">
      <div><h1 className="about-me">About</h1></div>

      <div className="about">
        <div className="about-text">
          <p>
          Hi! I'm Sanro, photographer based in London.
          <br/>
          <br/>
          My photography journey started on the other side of the camera as a model. I love tech, so I decided to buy a camera and learn more about photography and editing. And I ended up falling more in love with creating than being the subject of the creation.
          <br/>
          <br/>
          I was born and raised in Spain, but I moved out as soon as I turned 18. I needed travel to get to know more cultures, ideas and finding things that I was passionate about. I wanted to do something in a creative industry that could allow me to express myself, and being the tech and gear nerd that I am, photography started to call my attention.
          </p>
        </div>
        <div className="about-image">
          <img className="about-image-size" src={ImageAbout} alt="Sanro Photography About Image"/>
        </div>
      </div>

      <div className="contact-button-position">
        <a href="contact.html"><button className="button">Contact</button></a>
      </div>

    </div>
  );
};

export default About;