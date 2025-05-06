import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleCall(response) {
    console.log(response);
    setResults(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "5b407712f11dct93a10f4f1dc8e2394o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleCall);
  }

  //documentation: https://www.shecodes.io/learn/apis/dictionary

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}
