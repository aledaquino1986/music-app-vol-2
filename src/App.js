import React, {useState} from "react";
import Song from "./components/Song";
import Player from "./components/Player";
import "./styles/app.scss";
import data from "./data";

function App() {

  const [songs, setSongs] = useState(data);
  const [currentSong, setCurrentSong] = useState(songs[0])

  
  return (
    <div>
      <Song songs={songs} setSongs={setSongs} currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Player />
    </div>
  );
}

export default App;
