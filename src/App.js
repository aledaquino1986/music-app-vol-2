import React, { useState, useRef } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import "./styles/app.scss";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  const audioRef = useRef(null);

  const timeUpdateHandler = e => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({
      currentTime,
      duration
    });
  };

  return (
    <div>
      <Song
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        audioRef={audioRef}
      />

      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
      />

      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

export default App;
