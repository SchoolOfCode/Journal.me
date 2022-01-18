import React, { useState} from "react";


export default function Moodtracker(){
    //make a state called mood
    //set mood to 0
    //handleclick set the state
    
    const [mood, setMood] = useState(0);

    return(
    <div>
        <span>
            <h1>How Are you feeling Today?</h1>
            <button onClick = {(e)=>{ 
                e.preventDefault()
                setMood(0)
                
            }}>👿</button>
            <button onClick = {(e)=>{ 
                e.preventDefault()
                setMood(1)
            }}>😥</button>
           <button onClick = {(e)=>{ 
                e.preventDefault()
                setMood(2)
            }}> 😐</button>
            <button onClick = {(e)=>{ 
                e.preventDefault()
                setMood(3)
            }}>🙂</button>
            <button onClick = {(e)=>{ 
                e.preventDefault()
                setMood(4)
                console.log(mood)
            }}>😁</button>
        </span>

    
     </div>
    )
}