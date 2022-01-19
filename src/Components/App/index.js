import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Homepage from "../Homepage";
import Dayview from "../Dayview";
import TodoList from "../TodoList";

export default function App() {
  const [userId, setUserId] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Layout will have an ul inside a nav tag with Links to ToDoList and Homepage */}
          <Route path="/" element={<Layout />}>
            {/* Homepage will have h1 Hello bootcamper, h2 You're on week x, and the calander*/}
            <Route index element={<Homepage />} />
            {/* Day view will have Mood tracker component and Journal component */}
            <Route path="dayview" element={<Dayview />} />
            {/* Make a to-do list */}
            <Route path="todolist" element={<TodoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
