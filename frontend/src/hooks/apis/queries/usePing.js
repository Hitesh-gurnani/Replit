import { pingApi } from "../../../api/ping"
import { useQuery } from "@tanstack/react-query"
export default function usePing() {
    const { data, error, isLoading } = useQuery({
        queryFn: pingApi,
        queryKey: 'ping',
        staleTime: 10000,
    });
    return { data, error, isLoading };
}