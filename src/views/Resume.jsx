import React from 'react'
//import samepleResume from '../assets/sampleResume.docx';
import '../styles/Section.css';

export default function Resume() {
  return (
    <div> Resume
    <br>
    </br>
    <div>
      {/* <a href={samepleResume} download='sampleResume.docx'>download resume</a> */}
    </div>
    <div className='resume'>
    <h1>Front-end</h1> 
     <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>JQuery</li>
      <li>React</li>
      <li>BootStrap</li>
      <br>
      </br>
      <h1>Back-end</h1>
      <li>APIs</li>
      <li>Node JS</li>
      <li>Express</li>
      <li>MySQL</li>
      <li>Rest</li>
      </ul>
      </div>
    </div>
  );
}
