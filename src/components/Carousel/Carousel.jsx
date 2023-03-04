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

      <div className="carousel__previous" >
        <img src={previous} alt='précédente'id="previous-button" className={ (currentImageIndex +1=== 1) ? "arrow__previous" : ""}/>
      </div>

      <img className='carousel__img' src={images[currentImageIndex]} alt="imagecarousel" />
      <p className='position'>{currentImageIndex + 1}/{images.length}</p>


      <div className="carousel__next" >
          <img src={next} alt='suivante' id="next-button" className={ (currentImageIndex +1 === images.length) ? "arrow__next" : "" }/>
      </div>
      
    </div>
  );
}

export default Carousel;



