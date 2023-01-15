import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    //console.log(response.data[0].meanings[0].definitions[0].definition);
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    //console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search() {
    //documentation: https://dictionaryapi.dev/
    //documentation: https://www.pexels.com/api/documentation/?

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001ea920115fcd7417cacd5c99efd976c98";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
