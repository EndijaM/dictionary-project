import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong>
              {definitions.definition}
              <br />
              <strong>Example:</strong>
              <em>{definitions.example}</em>
              <br />
              <Synonyms synonyms={definitions.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}