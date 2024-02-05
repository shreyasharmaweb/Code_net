import React from 'react';
import "./detail.css";
import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const handle=()=>{
    navigate("/match"); 
  }
  return (
    <>
      <div className="reg_nav">
        <Header />
      </div>
      <div className="det_main">
        <div className="video-background">
        <video src={require("./hero.mp4")} loop autoPlay muted className="hero-video--section"></video>
          
        </div>
        <div className="box">
          <input type="text" placeholder="Username" className='text' />
          <input type="text" placeholder="University" className='text' />
          <input type="text" placeholder="Language Preffered" className='text' />
          <input type="text" placeholder="Rank on gfg" className='text' />
          <input type="text" placeholder="Rank on Leetcode" className='text' />
          <input type="text" placeholder="Projects" className='text' />
          <br />
          <button onClick={handle} className="reg_but" type="submit">
            <FontAwesomeIcon icon={faSignInAlt} /> Submit
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
