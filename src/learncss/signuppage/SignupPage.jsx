import React from 'react';
import './SignupPage.css';
import viewIcon from '../../assets/view.png';
import hideIcon from '../../assets/hide.png';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate();
  return (
    <>
        <div className="register-form">
            <h3>Registration</h3>
            <form>
                <div className="username">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className="email">
                    <input type="email" placeholder="Email Address"  />
                    <input type="password" placeholder="Enter Password" />
                    <input type="password" placeholder="Re-Enter Password" />
                </div>
                <div className="btn-grp"><button>Sign up</button></div>
            </form>
        </div>
        <p style={{cursor:"pointer", color:"white" }} onClick={()=> navigate("/login")}>Click here to login if already registered</p>
    </>
  )
}


export default SignupPage
