import uuid4 from "uuid4";
import fs from "fs/promises";
import directoryTree from "directory-tree";
import path from "path";
import { execPromise } from "../utils/execUtility.js";

export const createProjectService = async () => {
    const projectId = uuid4();
    console.log("new project " ,projectId)
    await fs.mkdir(`./projects/${projectId}`)

    const response = await execPromise(`npm create vite@latest sandbox -- --template react`,{
        cwd: `./projects/${projectId}`
    })

    //return res.status(200).json({ message: 'Project Created' , data:projectId })

    return projectId;
}

export const getProjectTreeService = async (projectId) => {
    const projectPath = path.resolve(`./projects/${projectId}`);
    const tree = directoryTree(projectPath);
    return tree;
}