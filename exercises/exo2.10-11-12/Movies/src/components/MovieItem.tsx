import { useState } from "react";

type Movie = {
  title: string;
  director: string;
  description: string;
};

type MovieItemProps = {
  movie: Movie;
};

export function MovieItem({ movie }: MovieItemProps) {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(prev => !prev);
  };

  return (
    <div 
      onClick={toggleDescription} 
      style={{ cursor: "pointer", marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "5px" }}
    >
      <h3>{movie.title}</h3>
      <p><strong>Director:</strong> {movie.director}</p>
      {showDescription && <p><em>{movie.description}</em></p>}
    </div>
  );
}