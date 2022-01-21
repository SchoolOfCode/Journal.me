import React, { useEffect, useReducer, useState } from "react";

import TodoList from "../TodoList";
import Moodtracker from "./DayviewComp/Moodtracker";
import Journal from "./DayviewComp/Journal";

import ArrowButton from "./DayviewComp/ArrowButton";









// BOOTSTRAP_USER_DATA(selectedDate, currentId)
export default function Dayview({selectedDate, currentId, nicleyFormattedDate}){

    //collect date and userId


  const [isJournalOpen, setIsJournalOpen] = useState(true);
  const [journalOfTheDay, setJournalOfTheDay] = useState({body:"Body", id:currentId, title:"Title", date:selectedDate})
  const [todosOfTheDay, setTodosOfTheDay] = useState([{item:"Bacon"},{ item:"Eggs"}])
  
/////////////////////////////////////////////
  useEffect(()=>{

    const getData = async()=>{
      const journalFetch = await fetch(`${process.env.REACT_APP_API}journals/${currentId}/${selectedDate}`)
      
      const journalJSON = await journalFetch.json()

      const todosFetch = await fetch(`${process.env.REACT_APP_API}todos/${currentId}/${selectedDate}`)
      const todosJSON = await todosFetch.json()
      
      if(journalJSON.payload.length === 0){return}

      setJournalOfTheDay(journalJSON.payload[0])
      
      if(todosJSON.payload.length === 0){return}
      
      setTodosOfTheDay(todosJSON.payload)
    }

    getData()
  },[currentId,selectedDate])
////////////////////////////////////////
  // useEffect(()=>{
  //     getAllDataByUser({selectedDate:selectedDate, currentId:currentId})
  // },[selectedDate, currentId])

  useEffect(()=>{
    //if(allDataByUser.journal === {}) return
    console.log(journalOfTheDay)
  },[journalOfTheDay])

  return (
    <div className="daily-journal">

    
    <div className="btn-container">
        <ArrowButton text="previous" />
        
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
          
          <TodoList nicleyFormattedDate={nicleyFormattedDate} todos={todosOfTheDay}/>
        </div>
      ) : (
        <></>
      )}

      {isJournalOpen ? (
        <div className="daily-journal">
          
          <Moodtracker nicleyFormattedDate={nicleyFormattedDate}/>
          <Journal journal={journalOfTheDay}/>
        </div>
      ) : (
        <></>
      )}

    </div>
  );
}
