import { useQuery } from "@tanstack/react-query";
import { getProjectTree } from "../../../api/project";

export const useProjectTree = ({ projectId }) => {
    const { data:projectTree, error, isLoading } = useQuery({
        queryKey: ['projectTree', { projectId }],
        queryFn: () => getProjectTree({ projectId }),
    });
    return { projectTree, error, isLoading };
}