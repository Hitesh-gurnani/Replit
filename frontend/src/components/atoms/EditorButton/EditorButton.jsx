import React from "react";
import "./EditorButton.css";
function EditorButton({ isActive = true }) {
    function handleClick() {
        // implement click handler 
    }
  return (
    <button
      className="editor-button"
      style={{
        color: isActive ? "white" : "#959eba",
        backgroundColor: isActive ? "#282a37" : "#4a4c5b",
        borderTop: isActive ? "1px solid #d282b1" : "none",
      }}
      onClick={handleClick}
    >
      file.js
    </button>
  );
}

export default EditorButton;
