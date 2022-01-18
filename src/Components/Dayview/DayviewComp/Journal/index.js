import React, {useState, useReducer} from "react";



export default function Journal(){

    const [formData, formDataDispatch] = useReducer(reduceFormData, )

    return(

        function handleClick({target : self}){
            
        }

    <form>
      <input placeholder="Title" onChange={}/>
      <input placeholder="Body" onChange={}/>
      <button onClick={(e)=>{
          e.preventDefault()
          handleClick(e)}}>Submit</button>

     </form>
    )
}