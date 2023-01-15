import React from "react";
import "./Phonetics.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <div className="text-center text-sm-start row flex-wrap-reverse">
        {" "}
        <span className="pronounciation col">{props.phonetic.text}</span>{" "}
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          className="audio-player col-sm-8"
        />
      </div>
    </div>
  );
}
