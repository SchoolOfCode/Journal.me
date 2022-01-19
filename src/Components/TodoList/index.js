import React, {useReducer, useState} from "react";
import"./style.css"

const actions  ={
    ADD_TO_LIST:"ADD_TO_LIST",
    CLEAR_ALL:"CLEAR_ALL",
    DELETE_THIS_ITEM:"DELETE_THIS_ITEM"

}

function reduceList(list, action){
    const {type} = action 
    const {value} = action
//Remove from list
//Cross out list item

    switch(type){
        case actions.ADD_TO_LIST:
        return [...list,value]

        case actions.CLEAR_ALL:
            return []
    
        case actions.DELETE_THIS_ITEM:
        
        return [...list.slice(0,value), ...list.slice(value+1)]
    
            default:
        return list
    }

}

export default function ToDoList() {
    const [input, setInput] = useState("")
    const [list, dispatchList] = useReducer(reduceList, ["bacon","eggs"])



  return (
    <div className= "todo-list">
      <input value={input} onChange ={({target : self})=>{
            setInput(self.value)
      }}placeholder="Add a to-do"/>

      <button onClick={(e)=>{
          e.preventDefault()
          dispatchList({type:actions.ADD_TO_LIST, value:input})
          setInput("")
      }}>Add</button>

<button onClick={(e)=>{
          e.preventDefault()
          dispatchList({type:actions.CLEAR_ALL, value:""})
      }}>Clear all</button>



      <ul>
        {list.map(function(todo, index){
            return( <span style={{display:"flex"}}>
                <li>{todo}</li> 
                <input type="checkbox" /> 
                <button onClick={(e)=>{ e.preventDefault()
                    dispatchList({type:actions.DELETE_THIS_ITEM, value:{index}})}}>🪓</button>


            </span>
            )
        })}


      </ul>
    </div>
  );
}
