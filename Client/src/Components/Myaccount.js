import React, { useEffect, useState } from "react";
import "./Myaccount.css";
import { useNavigate } from "react-router-dom";
import img from "../images/myaccount_logo.png";

const Myaccount  = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const callMyaccount = async () => {
    try {
      const res = await fetch("/account", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/Login");
    }
  };

  useEffect(() => {
    callMyaccount();
  },[]);

  return (
    <div>
      <form method="GET">
        <div className="box">
          <div className="user-account">
            <div className="person-logo">
              {" "}
              <img src={img} alt="not found" />
            </div>

            <div className="user-name">
              <b>{userData.username}</b>
            </div>
            <div className="account">
              <h2>Account Details</h2>
            </div>
          </div>

          <div className="user-details">
            <div className="name"><b> Name:     {userData.username}</b></div>
            <hr />
            <div className="email"><b>Email:    {userData.email}</b></div>
            <hr />
            <div className="phone"><b>Phone:    {userData.phone}</b> </div>
            <hr />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Myaccount;
