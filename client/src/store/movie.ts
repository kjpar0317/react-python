import { atomWithQuery } from "jotai/query";

import { getMovieList } from "@api/index";

const movieListStore = atomWithQuery(() => ({
  // queryKey: ["users", get(idAtom)],
  queryKey: ["movieList"],
  queryFn: async function (): Promise<any> {
    // const res = await fetch(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=${queryKey[1]}`
    // );
    // return res.json();
    const res = await getMovieList();

    return res;
  }
}));

export { movieListStore };
