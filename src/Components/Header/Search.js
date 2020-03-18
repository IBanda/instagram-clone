import React, { useRef, useState } from 'react';

export default function Search() {
  const [focus, setFocus] = useState(false);
  let inputState = 'false';
  const searchInput = useRef();
  function handleFocus() {
    if (!focus) {
      searchInput.current.focus();
      inputState = true;
    } else {
      searchInput.current.blur();
      inputState = false;
    }
    setFocus(inputState);
  }

  return (
    <div
      className="inputWrapper"
      ref={searchInput}
      tabIndex={-1}
      onFocus={() => handleFocus()}
      onBlur={() => handleFocus()}
    >
      <img className="searchIcon" src="images/search.svg" alt="search" />
      <input
        style={{ width: focus ? '160px' : '' }}
        type="text"
        placeholder="search"
      />
      {focus && (
        <button onClick={() => handleFocus()}>
          <img className="closeIcon" src="images/close.svg" alt="close" />
        </button>
      )}
    </div>
  );
}
