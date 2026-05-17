function WatchlistButton({ movie, onStatusChange }) {
  const nextStatus = movie.status === 'COMPLETED' ? 'PLANNED' : 'COMPLETED';
  const label = movie.status === 'COMPLETED' ? 'Mark planned' : 'Mark watched';

  return (
    <button
      className="watch-button"
      type="button"
      onClick={() => onStatusChange(movie.id, nextStatus)}
    >
      {label}
    </button>
  );
}

export default WatchlistButton;
