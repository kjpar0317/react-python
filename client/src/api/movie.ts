import { atom } from "jotai";
import { atomWithQuery } from "jotai/query";

import axiosUtils from "@util/axios-util";

const MOVIE_API_KEY = "22478a88b22311a5249584b2c23d6a3d";

const id = atom<number | string | null>(MOVIE_API_KEY);
const movieList = atomWithQuery(get => ({
  // queryKey: ["users", get(idAtom)],
  queryKey: ["movieList", get(id)],
  queryFn: async function ({ queryKey }): Promise<any> {
    // const res = await fetch(
    //   `https://api.themoviedb.org/3/movie/popular?api_key=${queryKey[1]}`
    // );
    // return res.json();
    const res = await axiosUtils.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${queryKey[1]}`
    );

    if (res && res.data) {
      return res.data;
    } else {
      console.log(res);
    }
  }
}));

export { movieList };
