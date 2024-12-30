import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    const RouteToPage = (index) =>{
        navigate(index);
    };
  return (
    <>
    
    <div className="card">
        <h2 title="go to home page">Login</h2>
        <form>
            <input type="email" placeholder="Enter your email ID" />
            <input type="password" placeholder="Enter your password" />
            <button>Login</button>
        </form>
    </div>
    <button on onClick={()=>RouteToPage("/")}>Go to Home</button>
    </>
  )
}

export default LoginPage
