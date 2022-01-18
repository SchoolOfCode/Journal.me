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
      <button
        onClick={e => {
          e.preventDefault();
        }}
      >
        Submit
      </button>
    </form>
  );
}
