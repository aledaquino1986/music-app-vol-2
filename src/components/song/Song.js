import React from "react";
import "./song.scss";

function Song({ currentSong }) {
  return (
    <div className="currentSong-container">
      <img
        src={currentSong.cover}
        alt={currentSong.artist}
        title={`${currentSong.name} by ${currentSong.artist}`}
      />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;
