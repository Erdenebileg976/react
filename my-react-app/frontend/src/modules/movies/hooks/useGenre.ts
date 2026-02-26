import { useQuery } from "@tanstack/react-query";
import { getMovieGenre } from "@/services/api";

export const useGetGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => getMovieGenre(),
  });
