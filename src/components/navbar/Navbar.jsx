import React from 'react';
import {useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const navigateToPage = (index) =>{
        navigate(index);
    }
  return (
    <>
        <nav className="nav-bar">
            <div className="nav-left">
                <ul>
                    <li onClick={()=> navigateToPage("/")}>Home</li>
                    <li onClick={()=> navigateToPage("/viewdata")}>view Data</li>
                    <li onClick={()=> navigateToPage("/checkstatus")}>check status</li>
                    <li onClick={()=> navigateToPage("/sortuser")}>filter users</li>
                    <li className="dropdown">
                        <a href="#">about us</a>
                        <div className="dropdown-container">
                            <a href="#">our story</a>
                            <a href="#">our team</a>
                            <a href="#">contact us</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    <p>Guest</p>
                    <li onClick={()=> navigateToPage("/login")}>Login</li>
                    <li onClick={()=> navigateToPage("/signup")}>Register</li>
                </ul>
            </div>
            
        </nav>
    </>
  )
}

export default Navbar
