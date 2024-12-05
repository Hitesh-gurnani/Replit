import util from 'util'
import child_process from 'child_process'
import fs from 'fs/promises'
import uuid4 from 'uuid4'

const execPromise = util.promisify(child_process.exec)

export const createProjectController = async (req, res) => {
    // craete a unique id and inside the projects folder create a folder with that id
    const projectId = uuid4();
    console.log("new project " ,projectId)
    await fs.mkdir(`./projects/${projectId}`)

    // after this call the npm run vite command to create a new vite project inside the folder

    const response = await execPromise(`npm create vite@latest sandbox -- --template react`,{
        cwd: `./projects/${projectId}`
    })

    return res.status(200).json({ message: 'Project Created' , data:projectId })
}