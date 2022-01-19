import React from "react";
import MyCalender from "../Calender";
import "./style.css";

function HomePage() {
  return (
    <div className="home-page">
      <h1> Hello, Bootcamper</h1>
      {/* (put name here maybe?) */}
      <h3>You're on week x</h3>
      <span style={{display:"flex"}}>
      <MyCalender />
      </span>
    </div>
  );
}

export default HomePage;
