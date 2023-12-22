import React from 'react';
import imgb from './images/cycle.png';
import './App3.css';
function DashBoard(){
  return(
    <div>
      <h1>helo</h1>
      <img src={imgb} alt='Bike' className='bikeimg'/>
    </div>
  );
}
export default DashBoard;