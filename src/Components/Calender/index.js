import { useState} from "react"; 
import {Link, Switch, Route, BrowserRouter as Router, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

function MyCalender() {
  const [date, setDate] = useState(new Date());

  function changeDate(event) {
    setDate(event);
  }

  return (
    <div className>
      <Calendar onChange={changeDate} value={date} />
      <p>You have selected: {moment(date).format("MMMM Do YYYY")}</p>
    </div>
  );
}

function getDailyViewfromCalendar() {
  let {getDailyViewfromCalendar} = useParams();
  return <h3> +</h3>
}


export default function App() {
  return (
<Router>
<div>  
<nav>
  <ul>
    <li>
      <Link to="../Dayview-todolist">DayView</Link>
    </li>
    <li>
      <Link to="../../../Calender">Calendar</Link>
    </li>
  </ul>
  </nav>
<Switch>
    <Route path="../../../Calender">
      <MyCalender />
    </Route>
    <Route path="/Dayview">
      <DayviewToDoList />
    </Route>
  </Switch>
</div>
</Router>
);
}

function dayView(){
<button
 onClick{...(e)} value={Date} => {
  e.preventDefault();
  dispatchCalendarDayview
  return CalenderDayview
 />
 


export default MyCalender
