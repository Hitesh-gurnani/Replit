import { useMutation } from "@tanstack/react-query";
import { createProject } from "../../../api/project";

export const useCreateProject = () => {
    const {mutateAsync , isPending , isSuccess , error} = useMutation({
        mutationFn: createProject,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (error) => {
            console.error(error);
        }
    })

    return {createAsyncMutation:mutateAsync , isPending , isSuccess , error}
}