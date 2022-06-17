import { useAtomValue } from "jotai";

import { movieListStore } from "@store/index";

export default function TestPage() {
  const { results } = useAtomValue<any>(movieListStore);

  return (
    <div className="px-4 pt-1">
      <div className="md:columns-2 2xl:columns-3 gap-10 [column-fill:_balance] box-border mx-auto before:box-inherit after:box-inherit">
        {results &&
          results.map((m: any, index: number) => (
            <div
              key={index}
              className="p-8 mb-6 shadow-xl break-inside-avoid card bg-base-100"
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
