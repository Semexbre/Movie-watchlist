const express = require('express');

const router = express.Router();

const movies = [
    {
        id: '1',
        title: 'The Social Network',
        overview: 'A sharp drama about ambition, friendship, and building a company that changes the web.',
        releaseYear: 2010,
        runtime: 120,
        genres: ['Drama', 'Biography'],
        posterUrl: '',
        status: 'PLANNED',
    },
    {
        id: '2',
        title: 'Inception',
        overview: 'A mind-bending heist movie built around dreams within dreams.',
        releaseYear: 2010,
        runtime: 148,
        genres: ['Sci-Fi', 'Action'],
        posterUrl: '',
        status: 'WATCHING',
    },
    {
        id: '3',
        title: 'Black Panther',
        overview: 'A superhero story about legacy, leadership, and the future of Wakanda.',
        releaseYear: 2018,
        runtime: 134,
        genres: ['Action', 'Adventure'],
        posterUrl: '',
        status: 'COMPLETED',
    },
];

router.get('/', (req, res) => {
    res.json(movies);
});

router.get('/:id', (req, res) => {
    const movie = movies.find((item) => item.id === req.params.id);

    if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
    }

    res.json(movie);
});

router.post('/', (req, res) => {
    const { title, overview, releaseYear, runtime, genres } = req.body;

    if (!title || !releaseYear || !runtime) {
        return res.status(400).json({ message: 'Title, release year, and runtime are required' });
    }

    const movie = {
        id: String(Date.now()),
        title,
        overview: overview || '',
        releaseYear: Number(releaseYear),
        runtime: Number(runtime),
        genres: Array.isArray(genres) ? genres : [],
        posterUrl: '',
        status: 'PLANNED',
    };

    movies.unshift(movie);
    res.status(201).json(movie);
});

router.patch('/:id/status', (req, res) => {
    const allowedStatuses = ['PLANNED', 'WATCHING', 'COMPLETED', 'DROPPED'];
    const movie = movies.find((item) => item.id === req.params.id);

    if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
    }

    if (!allowedStatuses.includes(req.body.status)) {
        return res.status(400).json({ message: 'Invalid watch status' });
    }

    movie.status = req.body.status;
    res.json(movie);
});

module.exports = router;
