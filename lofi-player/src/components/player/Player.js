import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from "@fortawesome/free-solid-svg-icons";

import "./player.scss";
function Player({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  currentSong,
  setCurrentSong
}) {
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

  const changeTrackHandler = direction => {
    let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
    if (direction === "forward") {
      setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
    }
    if (direction === "back") {
      if ((currentSongIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }

      setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
    }
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
        <FontAwesomeIcon
          className="back"
          icon={faAngleLeft}
          size="2x"
          onClick={() => changeTrackHandler("back")}
        />
        <FontAwesomeIcon
          className="play"
          icon={!isPlaying ? faPlay : faPause}
          size="2x"
          onClick={playSongHandler}
        />

        {isPlaying}
        <FontAwesomeIcon
          className="forward"
          icon={faAngleRight}
          size="2x"
          onClick={() => changeTrackHandler("forward")}
        />
      </div>
    </div>
  );
}

export default Player;
