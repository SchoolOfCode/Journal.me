import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";


function MyCalender({setSelectedDate, setNicleyFormattedDate}) {

  let navigate = useNavigate();

 
  
  
    // const [date, setDate] = useState(new Date());
    
    // function changeDate(event) {
    //   setDate(event);
    // }
  
    // function handleClick(e) {
    //   // changeDate(e)
    //   changeDate(e)
     
    //   setSelectedDate(String(moment(date).format("DMMYY")))
    //   setNicleyFormattedDate(String(moment(date).format("DDMMYY")))
    //   navigate("/dayview")
    // }


 

 

  return (
    <div className>
      <Calendar onClickDay={(date)=>{
        
     
        setSelectedDate(String(moment(date).format("DMMYY")))
        setNicleyFormattedDate(String(moment(date).format("DD-MM-YYYY")))
        navigate("/dayview")
      
      }
        
        }  />
    </div>
  );
}

export default MyCalender;




