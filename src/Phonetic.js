import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <span className="Phonetic">
      <a href={props.audio}>
        <button className="audioFile">Listen</button>
      </a>
      {""} / {props.phonetic} /{" "}
    </span>
  );
}
