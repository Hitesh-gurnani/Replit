import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { useActiveFileTabStore } from "../../../store/activeFileTabStore";
function EditorComponent() {
  const [editorState, setEditorState] = useState({
    theme: null,
  });

  const { editorSocket } = useEditorSocketStore();
  const { activeFileTab, setActiveFileTab } = useActiveFileTabStore();

  useEffect(() => {
    fetch("./Dracula.json")
      .then((response) => response.json())
      .then((data) => {
        setEditorState({ theme: data });
      })
      .catch((error) => console.error("Failed to load theme:", error));
  }, []);

  editorSocket?.on("readFileSuccess", ( data ) => {
    console.log(data,"adatatat")
    setActiveFileTab(data.path,data.data);
  })

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
        defaultLanguage="undefined"
        defaultValue="//Welcome to playground"
        value={activeFileTab?.value ? activeFileTab?.value : "//Welcome to playground"}
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
