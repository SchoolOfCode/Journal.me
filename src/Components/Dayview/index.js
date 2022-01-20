import React from "react";

import Moodtracker from "./DayviewComp/Moodtracker";
import Journal from "./DayviewComp/Journal";
import DayviewToDoList from "./DayviewComp/Dayview-todolist";
import ArrowButton from "./DayviewComp/ArrowButton";

export default function Dayview() {
  return (
    <div className="daily-journal">
      <div>
        <div className="btn-container">
        <ArrowButton text="previous" />
        <h2>date x</h2>
        <ArrowButton text="next" />
        </div>
        <Moodtracker />
        <Journal />
        {/* <button addTrip={this.triggerAddTripState}>click me</button> */}
      </div>
      <DayviewToDoList />
    </div>
  );
}
