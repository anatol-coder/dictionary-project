import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return <span className="Phonetic">/ {props.phonetic} / </span>;
}
