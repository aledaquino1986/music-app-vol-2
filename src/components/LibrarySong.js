import React from "react";

function LibrarySong({
  song,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  songs,
  id
}) {
  const songSelectHandler = () => {
    setCurrentSong(song);
    if (isPlaying) {
      const playPromise = audioRef.current.play();

      const newSongs = songs.map(song => {
        if (song.id === id) {
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

      if (playPromise !== undefined) {
        playPromise.then(audio => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      className={`library-song ${song.active === true ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
