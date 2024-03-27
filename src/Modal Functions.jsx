import React from 'react';
import sections from './Sections';

const Modal = ({ isOpen, images, currentSlide, onClose, onSelectSlide }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" style={{ display: 'block' }} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {images.map((img, index) => (
          <div
            key={img}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >
            <img src={`media/${sections}/${img}`} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Navigation buttons */}
        <button onClick={() => onSelectSlide(currentSlide - 1)}>Prev</button>
        <button onClick={() => onSelectSlide(currentSlide + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Modal;
