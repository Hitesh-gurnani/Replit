import React from "react";

function Tree({ fileFolderData }) {
  const [toggleVisibility, setToggleVisibility] = React.useState({});

  // Toggle visibility of folders
  const toggleFolder = (path) => {
    setToggleVisibility((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  };

  // Recursive function to render the tree structure
  const renderTree = (node) => {
    const isFolder = node?.children && node?.children.length > 0;

    return (
      <div key={node?.path} style={{ marginLeft: isFolder ? 20 : 40 }}>
        {isFolder ? (
          <div
            onClick={() => toggleFolder(node.path)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              color: toggleVisibility[node.path] ? "blue" : "black",
            }}
          >
            {toggleVisibility[node.path] ? "📂" : "📁"} {node?.name}
          </div>
        ) : (
          <div>📄 {node?.name}</div>
        )}
        {isFolder && toggleVisibility[node?.path] && (
          <div style={{ marginLeft: 20 }}>
            {node?.children.map((child) => renderTree(child))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {renderTree(fileFolderData)}
    </div>
  );
}

export default Tree;
