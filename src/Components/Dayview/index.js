import React, { useState } from "react";

import TodoList from "../TodoList";
import Moodtracker from "./DayviewComp/Moodtracker";
import Journal from "./DayviewComp/Journal";

export default function Dayview() {
  const [isJournalOpen, setIsJournalOpen] = useState(false);

  return (
    <div className="dayviewContainer">


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
