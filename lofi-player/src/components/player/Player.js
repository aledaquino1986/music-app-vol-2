import React from "react";
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
  setCurrentSong,
  setSongs
}) {
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const activeLibraryHandler = nextPreviousSong => {
    const newSongs = songs.map(song => {
      if (song.id === nextPreviousSong.id) {
        return {
          ...song,
          active: true
        };
      } else {
        return {
          ...song,
          active: false
        };
      }
    });

    setSongs(newSongs);
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

  const changeTrackHandler = async direction => {
    let currentSongIndex = songs.findIndex(song => song.id === currentSong.id);
    if (direction === "forward") {
      await setCurrentSong(songs[(currentSongIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentSongIndex + 1) % songs.length]);
    }
    if (direction === "back") {
      if ((currentSongIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }

        return;
      }

      await setCurrentSong(songs[(currentSongIndex - 1) % songs.length]);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00"}</p>
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
