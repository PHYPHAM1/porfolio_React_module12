import React from 'react';
import IMAGES from '../assets/images/index.js';

export default function Portfolilo() {
  return (
    <div>Portfolio
        <div className='portfolio'>
        <p>
        <img src={ IMAGES.logoCss } alt="" />
        <img src={ IMAGES.logoGolf } alt="" />
        <img src={ IMAGES.logoJs } alt="" />
        <img src={ IMAGES.logoMasters } alt="" />
        <img src={ IMAGES.logoReactImage } alt="" />
        <img src={ IMAGES.logoSql } alt="" />
        </p>
        </div>
    </div>
  );
}
