import React from "react";
import "../styles.css";

export default function MovieCard({ movie, key }) {
  return (
    <div>
      <div key={key} className="movie-card">
        <img src={`images/${movie.image}`} alt={movie.title} />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p className="movie-card-rating">{movie.rating}⭐</p>
        </div>
      </div>
    </div>
  );
}
