import React, { useState } from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import "./styles/app.scss";
import data from "./data";

function App() {
  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

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
      />

      <Library songs={songs} />
    </div>
  );
}

export default App;
