import React, { useState } from "react";

import "./App.scss";
import Player from "./components/player/Player";
import Song from "./components/song/Song";
import songsData from "./data/data";

function App() {
  const [songs, setSongs] = useState(songsData);
  const [currentSong, setCurrentSongs] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
