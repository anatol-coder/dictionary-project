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
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    // documentation: https://dictionaryapi.dev/e
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleCall);

    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "5b407712f11dct93a10f4f1dc8e2394o";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

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
