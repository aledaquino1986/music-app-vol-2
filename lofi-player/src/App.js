import React, { useState } from "react";

import "./App.scss";
import Player from "./components/player/Player";
import Song from "./components/song/Song";
import songsData from "./data/data";

function App() {
  const [songs, setSongs] = useState(songsData);
  const [currentSong, setCurrentSongs] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
}

export default App;
