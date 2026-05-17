import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export async function getMovies() {
  const response = await api.get('/movies');
  return response.data;
}

export async function getMovie(id) {
  const response = await api.get(`/movies/${id}`);
  return response.data;
}

export async function updateMovieStatus(id, status) {
  const response = await api.patch(`/movies/${id}/status`, { status });
  return response.data;
}

export default api;
