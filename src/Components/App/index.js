import React from "react";
import MyCalender from "../Calender";
/* import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment"; */

/* function App() {
  const [date, setDate] = useState(new Date());

  function changeDate(event) {
    setDate(event);
  }

  return (
    <div>
      <h1>Hello, Bootcamper</h1>
      <Calendar onChange={changeDate} value={date} />
      <p>You have selected: {moment(date).format("MMMM Do YYYY")}</p>
    </div>
  );
} */

function App() {
  return (
    <>
      <MyCalender />
    </>
  );
}

export default App;
