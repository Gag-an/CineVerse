import "./MovieCard.css";

function MovieCard({ title, rating }) {
  return (
    <div className="movie-card">

      <img
        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        alt="movie"
      />

      <div className="movie-info">
        <h2>{title}</h2>
        <p>⭐ {rating}</p>
      </div>

    </div>
  );
}

export default MovieCard;