import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./nav.scss";

function Nav({ libraryStatus, setLibraryStatus }) {
  const buttonClickHandler = () => {
    setLibraryStatus(!libraryStatus);
  };
  return (
    <nav>
      <h1>Chillhop Sounds</h1>
      <button onClick={buttonClickHandler}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}

export default Nav;
