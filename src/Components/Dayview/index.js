import React from "react";

import Moodtracker from "./DayviewComp/Moodtracker";
import Journal from "./DayviewComp/Journal";
import DayviewToDoList from "./DayviewComp/Dayview-todolist";

export default function Dayview() {
  return (
    <div className="daily-journal">
      <div>
        <Moodtracker />
        <Journal />
        <button addTrip={this.triggerAddTripState}>click me</button>
      </div>
      <DayviewToDoList />
    </div>
  );
}
