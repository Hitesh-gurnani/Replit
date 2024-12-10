import { create } from 'zustand';
import { useProjectTree } from '../hooks/apis/queries/useProjectTree';
import { QueryClient } from '@tanstack/react-query';
import { getProjectTree } from '../api/project';

export const useTreeStructureStore = create((set,get) => {
    const queryClient = new QueryClient();
    return {
        projectId: null,
        treeStructure: null,
        setTreeStructure: async()=>{
           const id = get().projectId;
           const data = await queryClient.fetchQuery({
                queryKey: ['projectTree', { id }],
                queryFn: () => getProjectTree({ projectId:id }),
           });
            set({ treeStructure: data.data });
        },
        setProjectId: (projectId) => { set({ projectId })},
    }
})