import React from "react";
import MyCalender from "../Calender";

import { Outlet, Link } from "react-router-dom";

import "./style.css";

function HomePage({userData, userId, setUserId}) {
  return (
    <div className="home-page">
      <h1> Hello, {userData[0].name}</h1> 

      {/* Dev Tools remove before merging to main */}
      <span>
        <button onClick={(e)=>{
        e.preventDefault();
          setUserId(Number(e.target.innerText))
        }}>1</button>
        <button onClick={(e)=>{
        e.preventDefault();
          setUserId(Number(e.target.innerText))
        }}>2</button>
        <button onClick={(e)=>{
        e.preventDefault();
          setUserId(Number(e.target.innerText))
        }}>3</button>
        <button onClick={(e)=>{
        e.preventDefault();
          setUserId(Number(e.target.innerText))
        }}>4</button>
        <button onClick={(e)=>{
        e.preventDefault();
          setUserId(Number(e.target.innerText))
        }}>5</button>
        <button onClick={(e)=>{
        e.preventDefault();
          setUserId(Number(e.target.innerText))
        }}>6</button>
      </span>
       {/* Dev Tools remove before merging to main */}

      <Link to="/dayview">
      <p>Go to today</p>
      </Link>
      <h3>You're on week x</h3>
      <span style={{display:"flex"}}>
      <MyCalender />
      </span>
    </div>
  );
}

export default HomePage;
