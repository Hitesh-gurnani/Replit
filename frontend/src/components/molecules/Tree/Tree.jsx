import React from "react";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { VscFile } from "react-icons/vsc";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";

function Tree({ fileFolderData }) {
  const [toggleVisibility, setToggleVisibility] = React.useState({});

  const toggleFolder = (path) => {
    setToggleVisibility((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  };

  const renderTree = (node) => {
    const isFolder = node?.children && node?.children.length > 0;

    return (
      <div
        key={node?.path}
        style={{
          padding: "10px 2px",
        }}
      >
        {isFolder ? (
          <div
            onClick={() => toggleFolder(node.path)}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              color: toggleVisibility[node.path] ? "#3498db" : "#2c3e50",
              fontWeight: "600",
            }}
          >
            {toggleVisibility[node.path] ? (
              <AiFillFolderOpen style={{ marginRight: 8, color: "#f1c40f" }} />
            ) : (
              <AiFillFolder style={{ marginRight: 8, color: "#e67e22" }} />
            )}
            {node?.name}
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#7f8c8d",
            }}
          >
            <BsFillFileEarmarkTextFill style={{ marginRight: 8, color: "#3498db" }} /> {node?.name}
          </div>
        )}
        {isFolder && toggleVisibility[node?.path] && (
          <div style={{ marginLeft: 10, paddingLeft: 10 }}>
            {node?.children.map((child) => renderTree(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        fontFamily: "Consolas, 'Courier New', monospace",
        fontSize: "14px",
        maxHeight: "max-content",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {renderTree(fileFolderData)}
    </div>
  );
}

export default Tree;
