import React, { useState } from "react";

import TodoList from "../TodoList";
import Moodtracker from "./DayviewComp/Moodtracker";
import Journal from "./DayviewComp/Journal";
import DayviewToDoList from "./DayviewComp/Dayview-todolist";
import ArrowButton from "./DayviewComp/ArrowButton";

export default function Dayview({selectedDate, userId}){


  const [isJournalOpen, setIsJournalOpen] = useState(true);

  return (
    <div className="daily-journal">

    
    <div className="btn-container">
        <ArrowButton text="previous" />
        <h2>date x</h2>
        <ArrowButton text="next" />
        </div>


      <button
        onClick={e => {
          e.preventDefault();
          setIsJournalOpen(true);
        }}
        style={{ all: "unset" }}
      >
        {isJournalOpen ? (
          <p style={{ background: "teal", border: "1px black dotted" }}>
            Journal 📖{" "}
          </p>
        ) : (
          <p style={{}}>Journal 📕</p>
        )}
      </button>

      <button
        onClick={e => {
          e.preventDefault();
          setIsJournalOpen(false);
        }}
        style={{ all: "unset" }}
      >
        {!isJournalOpen ? (
          <p style={{ background: "teal", border: "1px black dotted" }}>
            To Do List 📜
          </p>
        ) : (
          <p style={{}}>To Do List 🗞️</p>
        )}
      </button>

      {!isJournalOpen ? (
        <div>
          <TodoList />
        </div>
      ) : (
        <></>
      )}

      {isJournalOpen ? (
        <div className="daily-journal">
          <Moodtracker />
          <Journal />
        </div>
      ) : (
        <></>
      )}

    </div>
  );
}
