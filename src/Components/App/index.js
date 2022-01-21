import React, { useState, useEffect,useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../Layout";
import Homepage from "../Homepage";
import Dayview from "../Dayview";
import TodoList from "../TodoList";
import moment from "moment";

function reduceUserData(state, actions){
  //console.log(actions.userId)
  return actions.newState
}


export default function App() {
  const [currentId, setCurrentId] = useState(1);
  
  const [selectedDate, setSelectedDate] = useState(new Date())
  // const [userData, setUserData] = useState({id: 0, name: 'Default', cohort: 0}); 
  const [userData, updateUserData]= useReducer(reduceUserData, [{name:""}]) 
  const [nicleyFormattedDate, setNicleyFormattedDate] = useState(moment(new Date()).format("DDMMYY"))
  const [todaysDate, setTodaysDate] = useState(moment(new Date()).format("DD-MM-YY"))



  useEffect(()=>{

    
    fetch(`${process.env.REACT_APP_API}users/${currentId}`)
      .then(res=>res.json())
      .then(res=> updateUserData({newState:res.payload})
      //.then(res=>console.log(res.payload))
      
      )
    

  },[currentId])


  useEffect(()=>{
    console.log(currentId)
  },[userData])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Layout will have an ul inside a nav tag with Links to ToDoList and Homepage */}
          <Route path="/" element={<Layout />}>
            {/* Homepage will have h1 Hello bootcamper, h2 You're on week x, and the calander*/}
            <Route index element={<Homepage todaysDate={todaysDate} nicleyFormattedDate={nicleyFormattedDate} setNicleyFormattedDate={setNicleyFormattedDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} userData={userData} currentId={currentId} setCurrentId={setCurrentId}/>} />
            {/* Day view will have Mood tracker component and Journal component */}
            <Route path="dayview" element={<Dayview nicleyFormattedDate={nicleyFormattedDate} selectedDate={selectedDate} currentId={currentId} />} />
            {/* Make a to-do list */}
            <Route path="todolist" element={<TodoList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


//Deploy3.0

