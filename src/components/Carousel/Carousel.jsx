import React, { useState, useEffect } from 'react';
import './index.scss';
import previous from '../../assets/images/VectorBack.png';
import next from '../../assets/images/VectorForward.png';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleButtonClick = (event) => {
      const buttonId = event.target.id;
      if (buttonId === 'previous-button') {
        const newIndex = (currentImageIndex + images.length - 1) % images.length;
        setCurrentImageIndex(newIndex);
      } else if (buttonId === 'next-button') {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
      }
    };

    document.addEventListener('click', handleButtonClick);
    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, [currentImageIndex, images]);

  return (
    <div className='carousel'>
      <button className='carousel__previous' id="previous-button">
        <img src={previous} alt='précédente'/>
      </button>
      <img className='carousel__next' src={images[currentImageIndex]} alt="imagecarousel" />
      <button className='carousel__next' id="next-button">
      <img src={next} alt='suivante'/>
      </button>
    </div>
  );
}

export default Carousel;



