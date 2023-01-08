import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <span className="pronounciation">{props.phonetic.text}</span>{" "}
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
    </div>
  );
}
