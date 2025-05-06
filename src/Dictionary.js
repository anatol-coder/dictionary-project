import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} meaning`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="container">
      <div className="Dictionary">
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} />
        </form>
      </div>
    </div>
  );
}
