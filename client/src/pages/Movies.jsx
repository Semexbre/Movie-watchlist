import { useEffect, useMemo, useState } from 'react';
import { getMovies, updateMovieStatus } from '../api/api.js';
import MovieCard from '../components/MovieCard.jsx';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('ALL');
  const [message, setMessage] = useState('Loading movies...');

  useEffect(() => {
    getMovies()
      .then((data) => {
        setMovies(data);
        setMessage('');
      })
      .catch(() => setMessage('Could not load movies. Make sure the backend is running on port 8080.'));
  }, []);

  const visibleMovies = useMemo(() => {
    if (status === 'ALL') {
      return movies;
    }

    return movies.filter((movie) => movie.status === status);
  }, [movies, status]);

  async function handleStatusChange(movieId, nextStatus) {
    const updatedMovie = await updateMovieStatus(movieId, nextStatus);
    setMovies((currentMovies) =>
      currentMovies.map((movie) => (movie.id === movieId ? updatedMovie : movie))
    );
  }

  return (
    <section>
      <div className="toolbar">
        <div>
          <p className="eyebrow">Library</p>
          <h2>Movies</h2>
        </div>
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="ALL">All statuses</option>
          <option value="PLANNED">Planned</option>
          <option value="WATCHING">Watching</option>
          <option value="COMPLETED">Completed</option>
          <option value="DROPPED">Dropped</option>
        </select>
      </div>

      {message && <p className="empty-state">{message}</p>}

      {!message && visibleMovies.length === 0 && (
        <p className="empty-state">No movies match this filter yet.</p>
      )}

      <div className="movie-grid">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onStatusChange={handleStatusChange} />
        ))}
      </div>
    </section>
  );
}

export default Movies;
