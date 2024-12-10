import React, { useEffect } from "react";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { useParams } from "react-router-dom";
import EditorButton from "../components/atoms/EditorButton/EditorButton";
import TreeStructure from "../components/organisms/TreeStructure/TreeStructure";
import { useTreeStructureStore } from "../store/treeStructureStore";

function ProjectPlayground() {
  const { projectId: projectIdfromUrl } = useParams();
  const { projectId, setProjectId } = useTreeStructureStore();

  useEffect(() => {
    setProjectId(projectIdfromUrl);
  }, [setProjectId, projectIdfromUrl]);

  return (
    <div style={styles.container}>
      {projectId && (
        <aside style={styles.sidebar}>
          <h3 style={styles.sidebarHeader}>Project Explorer</h3>
          <div style={styles.treeWrapper}>
            <TreeStructure />
          </div>
        </aside>
      )}
      <main style={styles.mainContent}>
        {projectId && <EditorComponent />}
      </main>
    </div>
  );
}

export default ProjectPlayground;


const styles = {
  container: {
    display: "flex",
    height: "100vh",
    fontFamily: "'Roboto', sans-serif",
    backgroundColor: "#f5f5f5",
  },
  sidebar: {
    width: "300px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    padding: "20px",
    overflowY: "auto",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  },
  sidebarHeader: {
    marginBottom: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
    borderBottom: "1px solid #34495e",
    paddingBottom: "10px",
  },
  treeWrapper: {
    marginTop: "10px",
  },
  mainContent: {
    flex: 1,
    overflowY: "auto",
    backgroundColor: "#ffffff",
    boxShadow: "-2px 0 5px rgba(0, 0, 0, 0.1)",
    minHeight: "100vh",
  },
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
};
