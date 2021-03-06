import React, { useState } from "react";
import "./style.css";

export default function Moodtracker({nicleyFormattedDate}) {
  //make a state called mood
  //set mood to 0
  //handleclick set the state

  const [mood, setMood] = useState(0);

  return (
    <div className="mood">
      <h2 id="mood_tracker_text">How are you feeling today?</h2>
    <h2> {nicleyFormattedDate}</h2>
      <span>
        <button
          className="mood-btn"
          onClick={(e) => {
            e.preventDefault();
            setMood(0);
          }}
        >
          👿
        </button>
        <button
          className="mood-btn"
          onClick={(e) => {
            e.preventDefault();
            setMood(1);
          }}
        >
          😥
        </button>
        <button
          className="mood-btn"
          onClick={(e) => {
            e.preventDefault();
            setMood(2);
          }}
        >
          {" "}
          😐
        </button>
        <button
          className="mood-btn"
          onClick={(e) => {
            e.preventDefault();
            setMood(3);
          }}
        >
          🙂
        </button>
        <button
          className="mood-btn"
          onClick={(e) => {
            e.preventDefault();
            setMood(4);
            console.log(mood);
          }}
        >
          😁
        </button>
      </span>
    </div>
  );
}
