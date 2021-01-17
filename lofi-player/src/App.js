import React, { useState, useRef } from "react";

import "./App.scss";
import Player from "./components/player/Player";
import Song from "./components/song/Song";
import songsData from "./data/data";
import Library from "./components/library/Library";
import Nav from "./components/nav/Nav";

function App() {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(songsData);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: "",
    duration: ""
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const songTimeHandler = e => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: currentTime, duration });
  };

  return (
    <div className="App">
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />

      <audio
        src={currentSong.audio}
        ref={audioRef}
        onTimeUpdate={songTimeHandler}
        onLoadedMetadata={songTimeHandler}
      ></audio>
    </div>
  );
}

export default App;
