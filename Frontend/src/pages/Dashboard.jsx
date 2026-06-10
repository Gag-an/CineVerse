import "./Dashboard.css";

import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";

function Dashboard() {

  const trendingMovies = [
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
      title: "Avengers Endgame",
      rating: 8.5,
    },
  ];

  return (
    <div>

      <Navbar />

      <div className="hero-section">

        <div className="overlay">

          <h1>Unlimited Movies, Shows & More</h1>

          <p>
            Watch trending movies and book tickets instantly.
          </p>

          <button>Explore Now</button>

        </div>

      </div>

      <div className="movies-section">

        <h2>Trending Movies</h2>

        <div className="movies-grid">

          {trendingMovies.map((movie) => (
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

export default Dashboard;