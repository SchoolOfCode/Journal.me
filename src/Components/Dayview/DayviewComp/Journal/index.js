import React, { useReducer,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { actions, reduceFormData } from "../libs/actions.js";
import "./style.css";

export default function Journal({journal}) {
  const [formData, formDataDispatch] = useReducer(reduceFormData, {
    title: "",
    body: "",
  });

  const[test, setTest] = useState("Hello")

  return (
    // function handleClick({target : self}){

    // }

    <form>
      <h1> Your daily journal </h1>
    
      <div id="journal-input">
        <input
          id="textbox-title"
          placeholder={journal.title}
          onChange={(e) => {
            formDataDispatch({ type: actions.TITLE, value: e.target.value });
          }}
        />
        <input
          id="textbox-body"
          placeholder={journal.body}
          onChange={(e) => {
            formDataDispatch({ type: actions.BODY, value: e.target.value });
          }}
        />
      </div>
      <button
        id="submit"
        onClick={(e) => {
          e.preventDefault();
          alert("Working");
        }}
      >
        Submit
      </button>
    </form>
  );
}
