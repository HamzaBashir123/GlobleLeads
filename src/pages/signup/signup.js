import "./signup.css"

import React from "react";
import {useRef } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
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
           <input
            placeholder="Signup Code"
            type="password"
            required
            minLength="6"
            className="loginInput"
            ref={password}
          />
          <button className="loginButton" type="submit" >
            Create User
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signup