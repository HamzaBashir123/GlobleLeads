import "./login.css";

import React from "react";
import {useRef } from "react";
import { useNavigate } from "react-router-dom";




const Login = () => {
  const email = useRef();
  const navigate = useNavigate()
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/main')
  };
  return (
    
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <span className="loginDesc">
          Wellcome to 
        </span>
        <h3 className="loginLogo">Globalleads</h3>
      </div>
      <div className="loginRight">
        <form className="loginBox" onSubmit={handleClick}>
          <input
            placeholder="Email"
            type="email"
            required
            className="loginInput"
            ref={email}
          />
          <input
            placeholder="Password"
            type="password"
            required
            minLength="6"
            className="loginInput"
            ref={password}
          />
          <button className="loginButton " type="submit" >
            {/* Login button */}
            {/* Login button */}
            {/* Login button */}
            {/* Login button */}
            Login
          </button>
          <span className="loginForgot">Forgot password? please contact Admin</span>
         
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;
