import { MovieItem } from "./MovieItem";

type Movie = {
  title: string;
  director: string;
  description: string;
};

interface CinemaProps{
  name : string,
  movies : Movie[]
}
export function Cinema({name,movies}:CinemaProps){
  return (
    <section>
      <h2>{name}</h2>
      {movies.map((movie) => (
        <MovieItem key={movie.title} movie={movie} />
      ))}
    </section>
  );
};

export default Cinema;