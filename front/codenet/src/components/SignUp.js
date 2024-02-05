import React, { useState } from 'react';
import './SignUp.css';

import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
const SignUp = () => {
  const [isSignedUp, setSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };
  let navigate = useNavigate();

  const handlSignup = () => {
    setSignedUp(true)
    if (isSignedUp) {
      navigate('/details');
    }
  }

  return (
    <>
    <div className="sing_main">
    <div className="signup-container">
      <div className='signupform'>
        <form className="form_sign" onSubmit={handleSubmit}>
          <label className="lable">
            <h2>Name:</h2>
          </label>
          <input className="input" type="text" name="name" value={formData.name} onChange={handleChange} />
          <label className="lable">
          <h2>Email:</h2>
          </label>
          <input className="input" type="email" name="email" value={formData.email} onChange={handleChange} />
          <label className="lable">
          <h2>Password:</h2>
          </label>
          <input className="input" type="password" name="password" value={formData.password} onChange={handleChange} />
          <button className="but_sign" type="submit" onClick={handlSignup}>Sign Up</button>
        </form>

      </div>
    </div>
    </div>
    <Footer/>
   
    </>
  );
};

export default SignUp;