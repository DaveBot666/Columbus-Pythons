import React from "react";

import "./LearningOptions.css";

const LearningOptions = (props) => {
  const options = [
    { text: "Runningbacks", 
    handler: props.actionProvider.handleJavascriptList,
    id: 1},
    { text: "Wide Recievers", handler: () => {}, id: 2 },
    { text: "Quarterbacks", handler: () => {}, id: 3 },
    { text: "Tight ends", handler: () => {}, id: 4 },
    { text: "Draft Help", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
