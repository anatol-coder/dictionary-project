import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic.audio);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <button className="audioFileButton">Listen </button>
      </a>
      <br />
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}
