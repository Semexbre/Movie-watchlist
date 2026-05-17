import { Link } from 'react-router-dom';
import WatchlistButton from './WatchlistButton.jsx';

function MovieCard({ movie, onStatusChange }) {
  const genres = movie.genres?.length ? movie.genres : ['General'];

  return (
    <article className="movie-card">
      <div>
        <h3>{movie.title}</h3>
        <p className="muted">{movie.releaseYear} • {movie.runtime} min</p>
      </div>
      <p className="muted">{movie.overview || 'No overview added yet.'}</p>
      <div className="genre-list">
        {genres.map((genre) => (
          <span className="genre" key={genre}>{genre}</span>
        ))}
      </div>
      <span className="status-pill">{movie.status}</span>
      <div className="movie-actions">
        <Link className="details-link" to={`/movies/${movie.id}`}>Details</Link>
        <WatchlistButton movie={movie} onStatusChange={onStatusChange} />
      </div>
    </article>
  );
}

export default MovieCard;
