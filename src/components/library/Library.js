import React from "react";
import LibrarySong from "./library-song/LibrarySong";
import "./library.scss";

function Library({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus
}) {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => {
          return (
            <LibrarySong
              key={song.id}
              setCurrentSong={setCurrentSong}
              song={song}
              audioRef={audioRef}
              isPlaying={isPlaying}
              songs={songs}
              id={song.id}
              setSongs={setSongs}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Library;
