import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
function EditorComponent() {
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  useEffect(() => {
    fetch("./Dracula.json")
      .then((response) => response.json())
      .then((data) => {
        setEditorState({ theme: data });
      })
      .catch((error) => console.error("Failed to load theme:", error));
  }, []);

  const handleEditorMount = (editor, monaco) => {
    if (editorState.theme) {
      monaco.editor.defineTheme("dracula", editorState.theme);
      monaco.editor.setTheme("dracula");
    }
  };

  return (
    <div>
      <Editor
        height="100vh"
        width="100%"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue="//Welcome to playground"
        options={{
          fontSize: 18,
          fontFamily: "monospace",
          wordWrap: "on",
          minimap: {
            enabled: false,
          },
        }}
        onMount={handleEditorMount}
      />
    </div>
  );
}

export default EditorComponent;
