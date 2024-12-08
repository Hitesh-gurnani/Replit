import React from "react";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { useParams } from "react-router-dom";
import EditorButton from "../components/atoms/EditorButton/EditorButton";

function ProjectPlayground() {
  const { projectId } = useParams();
  return <div><EditorComponent/>
  <EditorButton/></div>;
}

export default ProjectPlayground;
