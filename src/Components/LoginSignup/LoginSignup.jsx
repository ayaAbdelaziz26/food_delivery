import React, { useState } from 'react'
import './loginSignup.css'
import cross_icon from '../../Assets/cross_icon.png'
import { useEffect } from 'react'

const LoginSignup = ({setCancel}) => {
    const[loginSignup,setLoginSignup]=useState("Login");
    const preventScroll = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    useEffect(() => {
      // Add event listeners to prevent scrolling
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
  
      return () => {
        // Remove event listeners to restore scrolling
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      };
    }, []);


  return (
    <div className='loginsignup'>
        <form className='loginsignup-popup'>
            <div className="loginsignup-popup-head">
            <h1>{loginSignup}</h1>
            <img src={cross_icon} alt="cancel" onClick={()=>setCancel(false)}/>
            </div>
            <div className="loginsignup-popup-inputs">
            {loginSignup==="Login"?<></>:<input type='text' placeholder='Name'/>}
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            </div>
            <button>{loginSignup}</button>
            <div className="loginsignup-popup-condition">
            <input type="checkbox" required/>
            <span>By continuing, i agree to the terms of use & privacy policy.</span>
            </div>
            {loginSignup==="Login"?<span>Don't have an account?<span className='loginsignup-popup-sign' onClick={()=>setLoginSignup("Sign up")}>signup here</span></span>:
            <span>Do you have an account?<span className='loginsignup-popup-sign' onClick={()=>setLoginSignup("Login")}>Login here</span></span>}
        </form>
    </div>
  )
}
export default LoginSignup
