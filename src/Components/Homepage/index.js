import React from "react";
import MyCalender from "../Calender";

function HomePage() {
  return (
    <div>
      <h1> Hello, Bootcamper</h1>
      {/* (put name here maybe?) */}
      <h3>You're on week x</h3>
      <MyCalender />
    </div>
  );
}

export default HomePage;
