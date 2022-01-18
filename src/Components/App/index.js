import React from "react";




export default function App() {



  return (
    <div className="App">
<BrowserRouter>
        <Routes>
          {/* Layout will have an ul inside a nav tag with Links to ToDoList and Homepage */}
          <route path="/" element={<Layout />} /> 
          {/* Homepage will have h1 Hello bootcamper, h2 You're on week x, and the calander*/}
          <route index element={<Homepage />}> 
          {/* Day view will have Mood tracker component and Journal component */}
            <route path="dayview" element={<Dayview />} />
            {/* Make a to-do list */}
            <route path="GlobalToDoList" element={<ToDoList />} />
          </route>
        </Routes>
      </BrowserRouter> 
    </div> 
  );

}




export default App;

