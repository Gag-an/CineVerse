import "./Movies.css";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function Movies() {

  const movies = [
    {
      id: 1,
      title: "Interstellar",
      rating: 9,
    },
    {
      id: 2,
      title: "Inception",
      rating: 8.8,
    },
    {
      id: 3,
      title: "Joker",
      rating: 8.4,
    },
    {
      id: 4,
      title: "Avatar",
      rating: 8.1,
    },
  ];

  return (
    <div>

      <Navbar />

      <div className="movies-page">

        <h1>All Movies</h1>

        <div className="movies-grid">

          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              rating={movie.rating}
            />
          ))}

        </div>

      </div>

    </div>
  );
}

export default Movies;