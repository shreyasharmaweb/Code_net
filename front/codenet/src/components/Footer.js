import React from 'react'
import "./footer.css";
export default function Footer() {
  return (
    <div className="foot">
        <footer className='footsec'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>PRODUCT</h3>
          <ul>
            <li>Website Templates</li>
            <li>Website Builder</li>
            <li>Online Collabrations</li>
          
          </ul>
        </div>
        <div className="footer-section">
          <h3>FEATURES</h3>
          <ul>
            <li>Comment-Section</li>
            <li>Mobile-Friendly</li>
            <li>Social Media Integrations</li>
           
          </ul>
        </div>
        <div className="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>Our Blog</li>
            <li>About Us</li>
            <li>Contact Us</li>
          
          </ul>
        </div>
        <div className="footer-section">
          <h3>SUPPORT</h3>
          <ul>
            <li>Resources</li>
            <li>FAQ</li>
            <li>Experience</li>
         
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        
      </div>
    </footer>
    </div>
  )
}
