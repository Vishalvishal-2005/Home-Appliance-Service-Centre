import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import img from '../images/prlogo.png';
import img1 from '../images/business.jpg';
import sp1 from '../images/sp1.jpeg';
import sp2 from '../images/sp2.jpeg';
import im from '../images/im.jpeg';
import img2 from '../images/img2.jpeg';
import img3 from '../images/img3.jpeg';
import mainimg1 from '../images/mainimg1.jpeg';
import mainimg2 from '../images/mainimg2.jpeg';
import mainimg3 from '../images/mainimg3.jpeg';
import insta from '../images/insta.jpg';
import wb from '../images/whatsapp.jpg';
import fb from '../images/download.png';
import ln from '../images/linkedin.png';

import '../asserts/dcs.css';
import { positions } from '@mui/system';
const Dashboard = () => {

  const [imageIndex, setImageIndex] = useState(0);
  const images = [im, img2, img3]; // Assuming img2 and img3 are your other image sources

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [images]);

  return (
    <div className="dashboard-container">
      <div className="slider">
        <div className="logo"></div>
        <ul className="menu">
          <li className="active">
            <a href="#">
              <i className="fas fa-home-alt"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
                <a href="#">
                    <i class="fas fa-user"></i>
                    <span>Profile</span>
                </a>
            </li>
            <li>
            <a href="#">
            <Link to="About.jsx"> <i class="fas fa-chart-bar"></i></Link>
                    <span>About</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-briefcase"></i>
                    <span>Careers</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-question-circle"></i>
                    <span>FAQ</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-cog"></i>
                    <span>Settings</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Log out</span>
                </a>
            </li>
                    </ul>
      </div>
      <div className="main">
        <div className="header">
          <div className="title">
            <span>Welcome!</span>
            <h2>All India Home Appliances Service Center</h2>
          </div>
          <div className="user">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search" />
            </div>
            <img src={img} alt="hello" />
          </div>
        </div>
        <div className="card">
          <span className="service">Services</span>
          <div>
            <img src={mainimg1} className='gridimg1'/>
              <h1 className='chead'>Just Call Service Center</h1>
             <i class="fa-solid fa-phone"></i>
             <p className='num'>+91 1234567890</p>
                        <p className='workm'>Discover the joy of smart living with our home appliances, designed to simplify your day </p>
                    <p class='ratc'>Ratings</p>
                        <button className='cbutton'>EnquireNow</button>
      </div>
                <div>
            <img src={mainimg3} className='gridimg1'/>
              <h1 className='chead'>Just Call Service Center</h1>
             <i class="fa-solid fa-phone"></i>
             <p className='num'>+91 _1234567890</p>
                        <p className='workm'>hello mechanic?</p>
                    <p class='ratc'>Ratings</p>
                        <button className='cbutton'>EnquireNow</button>
      </div>
      <div>
            <img src={mainimg2} className='gridimg1'/>
              <span className='chead'>Just Call Service Center</span>
             <i class="fa-solid fa-phone"></i>
             <p className='num'>+91 1234567890</p>
                        <p className='workm'>hello mechanic?</p>
                    <p class='ratc'>Ratings<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i></p>
                        <button className='cbutton'>Enquire Now</button>
      </div>
        </div>
        <div className="des">
          <h2>Special Offers</h2>
          <img src={images[imageIndex]} alt=""/>
          <img src={sp2} alt=""/>
        </div>
      <button className='viewmorec'>View More</button>
    <div className='footer'>
    <div class="socialmed">
            <img src={insta} alt="insta"/>
            <img src={wb} alt="twitter"/>
            <img src={fb} alt="whatsapp"/>
            <img src={ln} alt="linkedin"/>
        </div>
      <p style={{position:'relative',top:'-93%',fontSize:'25px',color:'#8c71d6',left:'0%'}}>
        For More:   727822tuad061@skct.edu.in
      </p>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
