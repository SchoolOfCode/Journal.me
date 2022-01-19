import React, { useReducer } from "react";
import { actions, reduceFormData } from "../libs/actions.js";


export default function Journal() {
    
  const [formData, formDataDispatch] = useReducer(reduceFormData, {
    title: "",
    body: "",
  });

  return (
    // function handleClick({target : self}){

    // }

    <form>
      <h1> Our Daily Journal </h1>
      <input
        placeholder="Title"
        onChange={e => {
          formDataDispatch({ type: actions.TITLE, value: e.target.value });
        }}
      />
      <input
        placeholder="Body"
        onChange={e => {
          formDataDispatch({ type: actions.BODY, value: e.target.value });
        }}
      />
      <button  id= "submit" onClick={e => { e.preventDefault();
        alert("Working")
        }}>
        Submit
      </button>
    </form>
  );
}
