import React from "react";
import "./Register.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/signup_logo.png";
import image2 from "../images/password_logo.png";
import image1 from "../images/gmail_logo.png";
import image3 from "../images/customer_logo.png";
import image4 from "../images/mobile_logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  let name, value;

  const handleChange = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { username, email, phone, password } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        password,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      navigate("/Login");
    }
  };

  return (
    <div>
      <div className="container">
        <h2>
          <b>Register</b>
        </h2>
        <div className="logo1">
          <img src={image} alt="not found" />
        </div>
        <div className="main-container">
          <form method="POST">
            <div className="name">
              <div className="customer-logo">
                {" "}
                <img src={image3} alt="not found" />
              </div>

              <input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                autoComplete="off"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            <div className="email">
              <div className="gmail-logo">
                {" "}
                <img src={image1} alt="not found" />
              </div>

              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="phone">
              <div className="mobile-logo">
                {" "}
                <img src={image4} alt="not found" />
              </div>

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleChange}
              />
            </div>
            <div className="password">
              <div className="password-logo">
                {" "}
                <img src={image2} alt="not found" />
              </div>

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="off"
                value={user.password}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="login-btn">
          <button onClick={postData} type="submit">
            Sign Up
          </button>
        </div>
        <div className="route-to-login">
          <Link to="/Login">
            <p>Already Registered?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
