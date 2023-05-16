import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "./Menus.css";
import { UserContext } from "../App";
import img from "../images/mobile-navbar.png"
import img2 from "../images/cart_logo.png";

const Menus = () => {
  const {state,dispatch}=useContext(UserContext);

  const Rendermenu=()=>{
    if(state)
    {
      return(
        <>
        <li className="navbar-nav">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar-nav">
            <Link to="/myaccount">Account</Link>
          </li>
          <li className="navbar-nav">
            <Link to="/logout">Logout</Link>
          </li>
          <li className="navbar-nav">
            <Link to="/cart"><img src={img2} alt="not found"/></Link>
          </li>
        </>
      )
    }else{
      return  (
        <>
        <li className="navbar-nav">
            <Link to="/home">Home</Link>
          </li>
          <li className="navbar-nav">
            <Link to="/login">Login</Link>
          </li>
          <li className="navbar-nav">
            <Link to="/register">Register</Link>
          </li>
          <li className="navbar-nav">
            <Link to="/myaccount">Account</Link>
          </li>
        </>
      )
    }
  }


  function menubar()
  {
     var x=document.getElementById('mobile-nav-small');
     if(x.className === 'navbar')
     {
      x.className +="responsive";
     }
     else
     {
      x.className ='navbar';
     }
  }
  return (
    <div className="new">
      
       <div className="navbar" id="mobile-nav-small">
         <h2>
          <b>VegStack</b>
          </h2>
        <ul className="navbar-list" >
          <Rendermenu/>
        </ul>
        <div className="mobile-nav-icon" onClick={menubar}><img src={img} alt="" /></div>
        
      </div> 
    </div>
  );
};

export default Menus;
