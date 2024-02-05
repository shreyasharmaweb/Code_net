import React from 'react'
import Footer from './Footer';
import { NavLink } from "react-router-dom";
import "./home.css"
import "./Last"
import Last from './Last';
export default function Home() {
  return (
    <div className='home'>
        
          <h1 className="home_h">CodeNet</h1>
    
      <div className="fl">
        <div>
      <h2 className="design">Connect Collaborate-Code</h2>
      <div className="nav_h">
        <NavLink to="/login">LOGIN</NavLink>
      </div>
      </div>
      <div className='final'>   
      <img className='img_h' alt="" src="https://img.freepik.com/premium-vector/robocomics-extravaganza-programmers-share-laughter-with-virtual-realities_978250-6367.jpg?w=740"/>
      </div>
      </div>
      
     <div className='user'>
     
       <div> 
       <h2 className='ex'>Our Expert</h2>
           <div className='sir'>
           </div>
        </div>
        <div className='para'>
          <p>Mr. Patel Neel Mahesh has been an invaluable guide throughout the development of our project, leveraging his exceptional expertise in JavaScript, React, databases, and more. His profound knowledge and sharp skills have played a pivotal role in steering our project towards success. With a keen understanding of cutting-edge technologies and a commitment to excellence, Mr. Patel Neel Mahesh has not only contributed significantly to the technical aspects of our project but has also inspired the team with his dedication and leadership. His mentorship has been instrumental
             in overcoming challenges, 
             fostering innovation, and ensuring 
             the seamless integration of various technologies. We are truly fortunate to have Mr. Patel Neel Mahesh as our expert, guiding us on this journey of development and growth.
           </p>
           </div>
       </div>
       <div className="varsha">
         <Last/>
       </div>
       <Footer/>
    </div>
  )
}
