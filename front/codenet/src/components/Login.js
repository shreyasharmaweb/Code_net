import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import "./index.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

// import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const handle=()=>{
    navigate("/details"); 
  }

  return (
    <>
    <div className="main">
      <div className="login-container">
      <h2>Login</h2>
      <form >
        <div className="form-group">
          <FontAwesomeIcon icon={faUser} />
          <input
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="email"
            placeholder="Email"
          />
        </div>

        <button onClick={handle} className='on' type="submit">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </button>
       
     

        {/* <button onclick={handleLogin}>Already Registered ?</button> */}

      </form>
      <div>
            <NavLink to="/register" >Already Registered ?</NavLink>
        </div>
    </div>
    
    </div>
    <Footer/>
    </>
  )
}
