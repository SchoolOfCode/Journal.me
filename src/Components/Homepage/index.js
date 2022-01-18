import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ourCalender from "../Calender";

function HomePage() {
  return (
    <>
      <h1>Hello, Bootcamper</h1>
      <h3>You're on week x</h3>
      <Calender />
    </>
  );
}

export default HomePage;
