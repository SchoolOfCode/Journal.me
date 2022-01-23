import React, { useReducer,useState } from "react";
import { useSearchParams } from "react-router-dom";
import { actions, reduceFormData } from "../libs/actions.js";
//import moment from "moment";
import "./style.css";

export default function Journal({refreshDay, setRefreshDay, journal, currentId, selectedDate, setCurrentId}) {
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
          value = {formData.title}
          onChange={(e) => {
            formDataDispatch({ type: actions.TITLE, value: e.target.value });
          }}
        />
        <input
          id="textbox-body"
          placeholder={journal.body}
          value={formData.body}
          onChange={(e) => {
            formDataDispatch({ type: actions.BODY, value: e.target.value });
          }}
        />
      </div>
      <button
        id="submit"
        onClick={async (e) => {
          e.preventDefault();
          
            const POST = async ()=>{
              await fetch(`${process.env.REACT_APP_API}journals/${currentId}/${selectedDate}`,{
                headers: {
                  'Content-Type': 'application/json'
                },
                method:"POST",
                body: JSON.stringify({
                  title: formData.title,
                  body: formData.body
              }),
              })

            }
          
            const PUT = async ()=>{
              await fetch(`${process.env.REACT_APP_API}journals/${currentId}/${selectedDate}`,{
                method:"PUT",
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  title: formData.title,
                  body: formData.body
              }),
              })
            }

            if (journal.title === "Title" && journal.body === "Body"){
            await POST()
          }else{
            await PUT()
          }
            setRefreshDay(!refreshDay)
            formDataDispatch({ type: actions.TITLE, value: "" });
            formDataDispatch({ type: actions.BODY, value: "" });
          }

        }
      >
        Submit
      </button>
    </form>
  );
}
