import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

// If component doesn't need state, use function
function Movie({ id, year, title, summary, poster, rating, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
          rating,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
          <h3 className="movie_title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <h5 className="movie_rating">{rating}/10</h5>
          <ul className="movie_genres">
            {genres &&
              genres.map((genre, index) => (
                <li key={index} className="genres_genre">
                  {genre}
                </li>
              ))}
          </ul>
          <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
