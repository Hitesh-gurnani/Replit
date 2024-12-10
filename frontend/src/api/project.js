import axios from '../config/axiosConfig'
export const createProject = async () => {
    try {
        const response = await axios.post('/api/v1/projects');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getProjectTree = async ({projectId}) => {
    console.log(projectId,"projectIdprojectIdprojectIdprojectId")
    try {
        const response = await axios.get(`/api/v1/projects/${projectId}/tree`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}