import React from "react";
import type { Movie } from "./types";

interface MovieCardProps {
  film: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ film }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, width: 220 }}>
      {film.image && <img src={film.image} alt={film.titre} style={{ width: "100%" }} />}
      <h3>{film.titre}</h3>
      <p><strong>Réalisateur:</strong> {film.director}</p>
      <p><strong>Durée:</strong> {film.dureeMinute}min</p>
      {film.description && <p>{film.description}</p>}
      {film.budget !== undefined && <p><strong>Budget:</strong> {film.budget}M</p>}
    </div>
  );
};

export default MovieCard;