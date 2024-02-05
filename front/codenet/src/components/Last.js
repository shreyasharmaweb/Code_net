import React from 'react';
import "./last.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function Last() {
  return (
    <div className="main_l">
      <h1 className="last_s">What We do</h1>
      <div className="order">
        <ul>
          <li className="list">Collaborations</li>
          <li className="list">Matching of profiles</li>
          <li className="list">Public ChatBox</li>
          <li className="list">Connections</li>
        </ul>
      </div>
      <div className="social">
        <h1 className='us'> Users</h1>
        <div className="main_c">
          <div>
            <div className="circle_v">
             
            </div>
            <h2>Varsha</h2>
            <FontAwesomeIcon icon={faStar} className="rating-icon" />
          </div>
          <div>
            <div className="circle_d">
             
            </div>
            <h2>Raj</h2>
            <FontAwesomeIcon icon={faStar} className="rating-icon" />
          </div>
          <div>
            <div className="circle_s">
              
            </div>
            <h2>Sachin</h2>
            <FontAwesomeIcon icon={faStar} className="rating-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
