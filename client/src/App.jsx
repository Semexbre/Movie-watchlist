import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <>
      <style>{styles}</style>
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </>
  );
}

const styles = `
:root {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #172033;
  background: #f5f7fb;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px clamp(20px, 4vw, 56px);
  color: #ffffff;
  background: #1d3557;
}

.brand {
  font-size: 1.1rem;
  font-weight: 900;
}

.nav-links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-links a {
  border-radius: 8px;
  padding: 8px 10px;
}

.nav-links a.active {
  background: rgba(255, 255, 255, 0.16);
}

.page-shell {
  padding: 28px clamp(20px, 4vw, 56px) 48px;
}

.hero {
  display: grid;
  gap: 18px;
  max-width: 820px;
}

.eyebrow {
  margin: 0;
  color: #0a6a59;
  font-size: 0.76rem;
  font-weight: 900;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  letter-spacing: 0;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4.5rem);
  line-height: 1;
}

h2 {
  margin: 0;
  font-size: 1.6rem;
}

.lead {
  margin: 0;
  color: #59687d;
  font-size: 1.1rem;
  line-height: 1.7;
}

.primary-link,
.form-card button {
  display: inline-flex;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  padding: 12px 16px;
  color: #ffffff;
  background: #e63946;
  font-weight: 900;
}

.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}

.movie-card,
.form-card,
.detail-panel {
  background: #ffffff;
  border: 1px solid #dfe6f1;
  border-radius: 8px;
  box-shadow: 0 10px 28px rgba(23, 32, 51, 0.08);
}

.movie-card {
  display: grid;
  gap: 14px;
  min-height: 260px;
  padding: 18px;
}

.movie-card h3 {
  margin: 0;
  font-size: 1.2rem;
}

.muted {
  margin: 0;
  color: #59687d;
}

.genre-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.genre,
.status-pill {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 800;
}

.genre {
  padding: 5px 8px;
  background: #e9f7f3;
  color: #0a6a59;
}

.status-pill {
  width: fit-content;
  min-height: 32px;
  padding: 6px 10px;
  background: #eef2ff;
  color: #3949ab;
}

.movie-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-top: auto;
}

.watch-button,
.details-link {
  border: 1px solid #cfd8e6;
  border-radius: 8px;
  padding: 9px 10px;
  color: #172033;
  background: #ffffff;
  font-weight: 800;
}

.form-card,
.detail-panel {
  display: grid;
  gap: 14px;
  max-width: 460px;
  padding: 20px;
}

.form-card label {
  display: grid;
  gap: 7px;
  color: #344258;
  font-weight: 800;
}

.form-card input {
  width: 100%;
  border: 1px solid #cfd8e6;
  border-radius: 8px;
  padding: 11px 12px;
}

.empty-state {
  padding: 20px;
  color: #59687d;
  background: #ffffff;
  border: 1px dashed #cfd8e6;
  border-radius: 8px;
}

@media (max-width: 700px) {
  .navbar,
  .toolbar,
  .movie-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
`;

export default App;
