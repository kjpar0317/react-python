import { useAtomValue } from "jotai";

import { movieListStore } from "@store/index";

export default function TestPage() {
  const { results } = useAtomValue<any>(movieListStore);

  return (
    <div className="px-4 pt-1">
      <div className="mx-auto gap-10 md:masonry-2-col lg:masonry-3-col">
        {results &&
          results.map((m: any, index: number) => (
            <div
              key={index}
              className="break-inside shadow-xl p-8 card mb-6 bg-base-100"
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
