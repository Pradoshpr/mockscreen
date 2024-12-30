import React from 'react';
import './FilterUser.css';
import Navbar from '../../components/navbar/Navbar';
import codeImage from '../../assets/code.jpg';
import CountdownTimer from '../../components/countdowntimer/CountdownTimer';
const FilterUser = () => {
  return (
    <>
        <Navbar />
       
        <br />
        <div className="content-container" >
            <div className="image-content">
                <img src={codeImage} alt="" />
                <h2>Coming Soon...</h2>
                <CountdownTimer />
            </div>
            <div className="form-notify">
                <p>We are working hard to bring something amezing. Stay tuned!</p>
                <input type="email" placeholder="please enter your email adress" />
                <button>Notify Me</button>
            </div>
        </div>
        
    </>
  )
}

export default FilterUser
