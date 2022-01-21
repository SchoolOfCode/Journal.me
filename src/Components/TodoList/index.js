
import React, {useEffect, useReducer, useState} from "react";
  import "./style.css";

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

export default function ToDoList({todos, nicleyFormattedDate}) {
    const [input, setInput] = useState("")
    const [list, dispatchList] = useReducer(reduceList, [])


    useEffect(()=>{

        // console.log(todos)
        todos.forEach((v)=>{
            dispatchList({type:actions.ADD_TO_LIST, value:v.item})
        }
        )
    },[todos])




  return (
    <div className="todo-list">
      
      <h1>Assignments/Tasks/Chores</h1>
      <h2>{nicleyFormattedDate}</h2>
      <input id="text_input"
        value={input}
        onChange={({ target: self }) => {
          setInput(self.value);
        }}
        placeholder="I need to complete..."
      />

      <button id="add_to_do_button"
        onClick={(e) => {
          e.preventDefault();
          dispatchList({ type: actions.ADD_TO_LIST, value: input });
          setInput("");
        }}
      >
        Add
      </button>

      <button id="clear_to_do_button"
        onClick={(e) => {
          e.preventDefault();
          dispatchList({ type: actions.CLEAR_ALL, value: "" });
        }}
      >
        Clear all
      </button>

      <ul>
        {list.map(function (todo, index) {
          return (
            <span style={{ display: "flex" }}>
              <li>{todo}</li>
              <input type="checkbox" />

              {/* <button
                onClick={(e) => {
                  e.preventDefault();
                  dispatchList({
                    type: actions.DELETE_THIS_ITEM,
                    value: { index },
                  });
                }}
              >
                🪓
              </button> */}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
