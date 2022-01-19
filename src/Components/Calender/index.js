import { useState } from "react";
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

export default MyCalender;
