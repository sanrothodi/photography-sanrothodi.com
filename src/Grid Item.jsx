import React, { useState } from 'react';
import Modal from './Modal Functions';
import { openModal, currentSlide } from './Modal Functions';


const GridItems = ({ images }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const openModalWithSlide = (index) => {
      setCurrentSlide(index);
      setModalOpen(true);
    };
  
    const closeModel = () => setModalOpen(false);
    const selectSlide = (index) => {
      if (index < 0 || index >= images.length) return;
      setCurrentSlide(index);
    };

  return (
    <>
    <div className="portfolio">
      {images.map((section, image, index) => (
        <div key={index} className="portfolio-grid" onClick={() => openModalWithSlide(index + 1)}>
          <img
            data-src={`media/${section}/${image}`}
            className="image-size"
            alt={`sanro-thodi-photography-${section}`}
            loading="lazy" // Using native lazy loading
          />
        </div>
      ))}
    </div>
    <Modal
        isOpen={modalOpen}
        images={images}
        currentSlide={currentSlide}
        onClose={closeModel}
        onSelectSlide={selectSlide}
    />
    </>
  );
};

export default GridItems;
