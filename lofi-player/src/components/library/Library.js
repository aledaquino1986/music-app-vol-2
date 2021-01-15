import React from "react";
import LibrarySong from "./library-song/LibrarySong";
import "./library.scss";

function Library({ songs }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(song => {
          return <LibrarySong key={song.id} {...song} />;
        })}
      </div>
    </div>
  );
}

export default Library;
