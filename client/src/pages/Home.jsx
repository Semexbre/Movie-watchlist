import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">Movie Tracker</p>
      <h1>Build your watchlist</h1>
      <p className="lead">
        Browse your movie library, inspect details, and mark what you plan to watch next.
      </p>
      <Link className="primary-link" to="/movies">View movies</Link>
    </section>
  );
}

export default Home;
