import React, { useState } from 'react'
import './navbar.css'
import search from '../../Assets/search_icon.png'
import basket from '../../Assets/basket_icon.png'
import list_icon from '../../Assets/list_icon.png'
import { Link } from 'react-router-dom'

//onclick on signup button clear the menue list
const Navbar = ({setCancel}) => {
    const[menueList,setMenueList]=useState(false);
    const stop=()=>{
        setCancel(true);
        setMenueList(false);
    }
  return (
    <div className='navbar'>
        <div className="navbar-logo">
           <Link to={'/'}><h1>TOMATO.</h1></Link>
        </div>

        <div className="navbar-options">
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <li>Menue</li>
                <li>Mobile app</li>
                <li>Contact us</li>
            </ul>
        </div>

        <div className="navbar-operations">
            <img src={search} alt="search icon" />
            <Link to='/cart'><img src={basket} alt="bag icon" /></Link>
            <img src={list_icon} alt="list menue" className='list-icon' onClick={()=>setMenueList(!menueList)}/>
            {menueList&&(
            <div className='navbar-menue'>
                <ul>
                <Link to={'/'}><li>Home</li></Link>
                <li>Menue</li>
                <li>Mobile</li>
                <li>Contact</li>
                <button onClick={stop}>Sign in</button>
                </ul>
            </div>)}
            <button onClick={()=>setCancel(true)}>Sign in</button>
            </div>
    </div>
  )
}

export default Navbar
