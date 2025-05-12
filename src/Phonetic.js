import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <span>
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <button>Listen</button>
        </a>
        {props.phonetic.text}
      </span>
    </div>
  );
}
