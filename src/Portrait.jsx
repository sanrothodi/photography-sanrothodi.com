import React from 'react';

import image01 from './media/Portrait/image-01.jpg';
import image02 from './media/Portrait/image-02.jpg';
import image03 from './media/Portrait/image-03.jpg';
import image04 from './media/Portrait/image-04.jpg';
import image05 from './media/Portrait/image-05.jpg';
import image06 from './media/Portrait/image-06.jpg';
import image07 from './media/Portrait/image-07.jpg';
import image08 from './media/Portrait/image-08.jpg';
import image09 from './media/Portrait/image-09.jpg';
import image10 from './media/Portrait/image-10.jpg';
import image11 from './media/Portrait/image-11.jpg';
import image12 from './media/Portrait/image-12.jpg';
import image13 from './media/Portrait/image-13.jpg';
import image14 from './media/Portrait/image-14.jpg';
import image15 from './media/Portrait/image-15.jpg';
import image16 from './media/Portrait/image-16.jpg';
import image17 from './media/Portrait/image-17.jpg';
import image18 from './media/Portrait/image-18.jpg';
import image19 from './media/Portrait/image-19.jpg';
import image20 from './media/Portrait/image-20.jpg';
import image21 from './media/Portrait/image-21.jpg';
import image22 from './media/Portrait/image-22.jpg';
import image23 from './media/Portrait/image-23.jpg';
import image24 from './media/Portrait/image-24.jpg';
import image25 from './media/Portrait/image-25.jpg';
import image26 from './media/Portrait/image-26.jpg';
import image27 from './media/Portrait/image-27.jpg';
import image28 from './media/Portrait/image-28.jpg';
import image29 from './media/Portrait/image-29.jpg';
import image30 from './media/Portrait/image-30.jpg';

const portfolioImages = {
  'image-01.jpg': image01,
  'image-02.jpg': image02,
  'image-03.jpg': image03,
  'image-04.jpg': image04,
  'image-05.jpg': image05,
  'image-06.jpg': image06,
  'image-07.jpg': image07,
  'image-08.jpg': image08,
  'image-09.jpg': image09,
  'image-10.jpg': image10,
  'image-11.jpg': image11,
  'image-12.jpg': image12,
  'image-13.jpg': image13,
  'image-14.jpg': image14,
  'image-15.jpg': image15,
  'image-16.jpg': image16,
  'image-17.jpg': image17,
  'image-18.jpg': image18,
  'image-19.jpg': image19,
  'image-20.jpg': image20,
  'image-21.jpg': image21,
  'image-22.jpg': image22,
  'image-23.jpg': image23,
  'image-24.jpg': image24,
  'image-25.jpg': image25,
  'image-26.jpg': image26,
  'image-27.jpg': image27,
  'image-28.jpg': image28,
  'image-29.jpg': image29,
  'image-30.jpg': image30,
};

const PortfolioGrid = () => {
  // Convert images object into an array of [imageName, imageUrl] pairs
  const imageEntries = Object.entries(portfolioImages);

  return (
    <div className="gallery-content">
    <div className="portfolio">
      {imageEntries.map(([imageName, imageUrl], index) => (
        <div key={index} className="portfolio-grid">
          <img
            src={imageUrl} // Use the imported image URL directly
            className="image-size"
            alt={`sanro-thodi-photography-${imageName}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
    </div>
  );
  
};

export default PortfolioGrid;