import React, { useReducer } from "react";
import { actions, reduceFormData } from "../libs/actions.js";
import "./style.css";

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

      <container id="journal-input">
        <input
          id="textbox-title"
          placeholder="Title"
          onChange={(e) => {
            formDataDispatch({ type: actions.TITLE, value: e.target.value });
          }}
        />
        <input
          id="textbox-body"
          placeholder="Body"
          onChange={(e) => {
            formDataDispatch({ type: actions.BODY, value: e.target.value });
          }}
        />
      </container>
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
