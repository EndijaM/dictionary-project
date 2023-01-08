import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definitions, index) {
        return (
          <div key={index}>
            <h6>
              <strong>Definition:</strong>
              {definitions.definition}
              <br />
              <strong>Example:</strong>
              <em>{definitions.example}</em>
              <br />
              <Synonyms synonyms={definitions.synonyms} />
            </h6>
          </div>
        );
      })}
    </div>
  );
}
