import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <label>What word would you like to look up?</label>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus="on"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              className=" search-window"
            />
          </form>

          <div className="examples-words text-muted">
            Suggested words: water, fruit, earth, sunset, cinema ...
          </div>
        </section>

        <Results results={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
