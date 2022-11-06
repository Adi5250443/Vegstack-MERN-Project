import React, { useContext, useState } from "react";
import {useNavigate } from "react-router-dom";
import "./Login.css";
import image from "../images/login_logo.png"
import image1 from "../images/gmail_logo.png"
import image2 from "../images/password_logo.png"
import { UserContext } from "../App";

const Login = () => {
  const {state,dispatch}=useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    });
    const data = await res.json();
    if (res.status===400 || !data) {
      window.alert("Invalid Credentials");
    }
     else {
      dispatch({type:"USER",payload:true});
      window.alert("Login Successful");
      navigate("/Home");
    }
  };

  return (
    <div>
      <div className="container">
        <h2>Login</h2>
        <div className="logo2"><img src={image} alt="not found" /></div>
        <form method="POST">
          <div className="username">
           <div className="gmail-logo"> <img src={image1} alt="not found" /></div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-password">
           <div className="password-logo"> <img src={image2} alt="not found" /></div>

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>

        <div className="login-btn">
          <button onClick={loginUser} type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
