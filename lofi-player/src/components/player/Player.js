import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";

import "./player.scss";
function Player() {
  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End time</p>
      </div>

      <div className="controls">
        <FontAwesomeIcon className="back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon className="play" icon={faPlay} size="2x" />
        <FontAwesomeIcon className="back" icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
}

export default Player;
