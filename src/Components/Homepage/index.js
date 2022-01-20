import React from "react";
import MyCalender from "../Calender";
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
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </span>
       {/* Dev Tools remove before merging to main */}
      {/* { (put name here maybe?) */}
      <h3>You're on week x</h3>
      <span style={{display:"flex"}}>
      <MyCalender />
      </span>
    </div>
  );
}

export default HomePage;
