import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

import "./player.scss";
function Player({ isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo }) {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = time => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const inputDragHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.duration)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={inputDragHandler}
        />
        <p>{formatTime(songInfo.currentTime)}</p>
      </div>

      <div className="controls">
        <FontAwesomeIcon className="back" icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          className="play"
          icon={!isPlaying ? faPlay : faPause}
          size="2x"
          onClick={playSongHandler}
        />

        {isPlaying}
        <FontAwesomeIcon className="back" icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
}

export default Player;
