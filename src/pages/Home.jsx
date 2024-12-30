import React from 'react';
import '../App.css';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <>
        <Navbar />
        <br /> <br /> <br/>
        <div className="grid-container">
        <div className="grid-item">1 1234567890</div>
        <div className="grid-item">2 1234567890</div>
        <div className="grid-item">3 1234567890</div>
        <div className="grid-item">4 1234567890</div>
        <div className="grid-item">5 1234567890</div>
        <div className="grid-item">6 1234567890</div>
        <div className="grid-item">7 1234567890</div>
        <div className="grid-item">8 1234567890</div>
        <div className="grid-item">9 1234567890</div>
    </div>
    </>
  )
}

export default Home
