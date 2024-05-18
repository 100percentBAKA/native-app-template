import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "./api";

export function useGetAllMovies() {
    return useQuery({
        queryKey: ['get-all-movies'],
        queryFn: getAllMovies
    })
}