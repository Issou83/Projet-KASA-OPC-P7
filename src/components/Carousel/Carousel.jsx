import React, { useState, useEffect } from 'react';
import './index.scss';
import previous from '../../assets/images/VectorBack.png';
import next from '../../assets/images/VectorForward.png';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let showNext=(true);
  let showPrevious=(true)

  useEffect(() => {
    const handleButtonClick = (event) => {
      const buttonId = event.target.id;
      console.log(event);



      if (buttonId === 'previous-button') {
        const newIndex = (currentImageIndex + images.length - 1) % images.length;
        setCurrentImageIndex(newIndex);
      } else if (buttonId === 'next-button') {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
      }

      if (currentImageIndex +1 === images.length) { showNext = false }
      if (currentImageIndex === 1) { showPrevious = false }
      console.log(showNext);
      console.log(showPrevious);

    };

    


    document.addEventListener('click', handleButtonClick);
    return () => {
      document.removeEventListener('click', handleButtonClick);
    };
  }, [currentImageIndex, images]);
  console.log(currentImageIndex);
  console.log(images.length);
  return (
    <div className='carousel'>

      <botton className='carousel__previous' >
        <img src={previous} alt='précédente'id="previous-button"/>
      </botton>

      <img className='carousel__img' src={images[currentImageIndex]} alt="imagecarousel" />
      <p className='position'>{currentImageIndex + 1}/{images.length}</p>

      <botton className='carousel__next' >
        
        
          <img src={next} alt='suivante' id="next-button"/>
        
      </botton>
    </div>
  );
}

export default Carousel;



