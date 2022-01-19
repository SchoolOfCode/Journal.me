import React from "react";

import Moodtracker from "./DayviewComp/Moodtracker";
import Journal from "./DayviewComp/Journal";


export default function Dayview(){
    return(
    <div className = "daily-journal">
    <Moodtracker />
    <Journal />  
    
     </div> 
    )
}

