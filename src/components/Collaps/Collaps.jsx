import React, { useState, useEffect } from "react";
import arrowUp from '../../assets/images/VectorUp.png';
import arrowDown from '../../assets/images/VectorDown.png';
import { useLocation } from 'react-router-dom'; 
import './index.scss';


const Collaps = ({title, content}) => {
  const [open, setOpen] = useState(false);
  const [locationAbout, setLocationAbout] = useState(false);

  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/about') {setLocationAbout(true)}
    
},[location,locationAbout]);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={locationAbout ? 
      " containerCollaps containerCollaps__about" : 
      " containerCollaps containerCollaps__housing" }>

      <div className={locationAbout ? 
      " containerCollaps__header containerCollaps__header__about" : 
      " containerCollaps__header containerCollaps__header__housing"} onClick={handleToggle}>

        <p className={locationAbout ? 
          " containerCollaps__title containerCollaps__title__about" : 
          " containerCollaps__title containerCollaps__title__housing"}>{title}</p>

        <div className="containerCollaps__arrows" >{open ? 
            <img className="containerCollaps__arrow" src={arrowUp} alt="" />  : 
            <img className="containerCollaps__arrow" src={arrowDown} alt="" />}
        </div> 

      </div>

      {open && (
        <div className={locationAbout ? 
          " containerCollaps__content containerCollaps__content__about" : 
          "containerCollaps__content containerCollaps__content__housing"}>

          <p className="containerCollaps__body">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collaps;
