import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovie } from '../api/api.js';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState('Loading movie...');

  useEffect(() => {
    getMovie(id)
      .then((data) => {
        setMovie(data);
        setMessage('');
      })
      .catch(() => setMessage('Movie not found.'));
  }, [id]);

  if (message) {
    return <p className="empty-state">{message}</p>;
  }

  return (
    <section className="detail-panel">
      <p className="eyebrow">Movie Details</p>
      <h1>{movie.title}</h1>
      <p className="muted">{movie.releaseYear} • {movie.runtime} minutes</p>
      <p className="lead">{movie.overview || 'No overview added yet.'}</p>
      <span className="status-pill">{movie.status}</span>
      <Link className="primary-link" to="/movies">Back to movies</Link>
    </section>
  );
}

export default MovieDetails;
