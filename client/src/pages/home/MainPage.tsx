import { useAtomValue } from "jotai";

import { movieList } from "@api/index";

export default function TestPage() {
  const { results } = useAtomValue<any>(movieList);

  return (
    <div className="px-4 pt-1">
      <div className="grid w-full gap-3 lg:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {results &&
          results.map((m: any, index: number) => (
            <div
              key={index}
              className="w-full shadow-xl card x-fit bg-base-100"
            >
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w185${m.poster_path}`}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{m.title}</h2>
                <p>{m.overview}</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
