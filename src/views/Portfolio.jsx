import React from 'react';
import IMAGES from '../assets/images/index.js';
import '../styles/Section.css';

export default function Portfolilo() {
  return (
    
    <div>Portfolio
        <div className='css'>
        <a href="https://github.com"> <img src={ IMAGES.logoCss } alt="" /></a>
        
        </div>
        <div className='golf'>
        
        </div>
        <div className='js'>
        <img src={ IMAGES.logoJs } alt="" />
        </div>
        <div className='masters'> 
        <img src={ IMAGES.logoMasters } alt="" />
        </div>
        <div className='reactImage'>
        <img src={ IMAGES.logoReactImage } alt="" />
        </div>
        <div className='sql'>
        <img src={ IMAGES.logoSql } alt="" />
        </div>
        
      </div>
    
  );
}
