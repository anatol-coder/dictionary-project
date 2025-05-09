import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleCall(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "5b407712f11dct93a10f4f1dc8e2394o";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleCall);

    let pexelsApiKey =
      "vNAXdG3jksl9MDt7vGQTNYw4PYQdeDaIx9QXAni2bV1WD6U4qncJvkpA";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    axios
      .get(`${pexelsApiUrl}`, { headers: { Authorization: `${pexelsApiKey}` } })
      .then((response) => {
        handlePexelsResponse(response);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //documentation: https://www.shecodes.io/learn/apis/dictionary

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (loaded) {
    return (
      <div className="container">
        <div className="Dictionary">
          <section>
            <h4>What word do you want to look up?</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                defaultValue={props.defaultKeyWord}
                onChange={handleKeywordChange}
              />
            </form>
            <h5>suggested words: sunset, plant, vacation, tennis...</h5>
          </section>

          <Results results={results} />
          <Photos photos={photos} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
