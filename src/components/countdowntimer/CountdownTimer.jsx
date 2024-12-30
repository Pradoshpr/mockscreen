import React, {useState, useEffect } from 'react';
import './CountdownTimer.css';
const CountdownTimer = () => {
    const targetDate = new Date("February 17, 2025 09:00:00").getTime();
    const [timeLeft,setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft(){
        const now = new Date().getTime();
        const difference = targetDate - now;
        if(difference <=0){
            return {
                days:0,
                hours:0,
                minutes:0,
                seconds:0,
            };
        }
        else{
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
    }

    useEffect(()=> {
        const timer = setInterval(()=>{
            setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
},[]);

  return (
    <>
        <div className="count-timer">
            <div className="days">{timeLeft.days <= 1 ? timeLeft.days + " day" : timeLeft.days + " \ndays"}</div>
            <div className="hours">{timeLeft.hours <= 1 ? timeLeft.hours + " hour" : timeLeft.hours + " hours"}</div>
            <div className="minutes">{timeLeft.minutes <=1 ? timeLeft.minutes + " minute" : timeLeft.minutes + " minutes"}</div>
            <div className="seconds">{timeLeft.seconds <= 1 ? timeLeft.seconds + " second" : timeLeft.seconds + " seconds"}</div>
        </div>
    </>
  )
}

export default CountdownTimer
