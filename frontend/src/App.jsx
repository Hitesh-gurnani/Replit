import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import usePing from "./hooks/apis/queries/usePing";
import PingComponent from "./components/atoms/PingComponent";
import { Routes, Route } from "react-router-dom";
import CreateProject from "./pages/CreateProject";
import ProjectPlayground from "./pages/ProjectPlayground";
import { io } from "socket.io-client";

function App() {

  return (
    <>
      <Routes>
            <Route path="/" element={<CreateProject/>}></Route>
            <Route path="/project/:projectId" element={<ProjectPlayground/>}></Route>
        </Routes>
    </>
  );
}

export default App;
