import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function (definitions, index) {
          return (
            <div key={index}>
              <div className="definition">{definitions.definition}</div>
              <div className="examples">
                <p>{definitions.example}</p>
              </div>
              <div className="synonyms">
                <Synonyms synonyms={definitions.synonyms} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
