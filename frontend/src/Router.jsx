import { Route, Routes } from "react-router-dom";
import ProjectPlayground from "./pages/ProjectPlayground";

export const Router = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<CreateProject/>}></Route>
            <Route path="/project/:projectId" element={<ProjectPlayground/>}></Route>
        </Routes>
        </>
    );
}