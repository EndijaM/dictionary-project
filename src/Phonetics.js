import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <div className="row text-center text-sm-start pb-2">
        <div className="pronounciation col-sm-4">{props.phonetic.text}</div>{" "}
        <div className="col-sm-6 p-0">
          <ReactAudioPlayer
            src={props.phonetic.audio}
            controls
            className="audio-player "
          />
        </div>
      </div>
    </div>
  );
}
