import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div className="Definition">
        <Synonyms synonyms={props.meaning.synonyms} />
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <br />
              <div className="Definition">
                <strong>{definition.definition}</strong>
              </div>
              <br />
              <div className="Example">
                <em>{definition.example}</em>
              </div>
              <br />
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
