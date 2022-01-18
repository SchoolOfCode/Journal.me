import React, { useState } from "react";
import Calendar from "react-calendar";

function App() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <h1>Hello</h1>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default App;
