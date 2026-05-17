
# Movie Watchlist App

A beginner-friendly full-stack movie watchlist project built with Node.js, Express, Prisma, PostgreSQL/Neon, and React.

## Features

- Express backend API
- Prisma database schema
- Neon PostgreSQL database support
- React frontend with Vite
- Movie list page
- Movie details page
- Login and register page structure
- Watchlist status button
- Clean frontend/backend folder structure

## Project Structure

```text
backend_beginner/
├─ prisma/
│  └─ schema.prisma
├─ src/
│  ├─ server.js
│  └─ routes/
│     └─ movieRoutes.js
├─ client/
│  ├─ index.html
│  ├─ package.json
│  └─ src/
│     ├─ main.jsx
│     ├─ App.jsx
│     ├─ api/
│     │  └─ api.js
│     ├─ pages/
│     │  ├─ Home.jsx
│     │  ├─ Movies.jsx
│     │  ├─ MovieDetails.jsx
│     │  ├─ Login.jsx
│     │  └─ Register.jsx
│     └─ components/
│        ├─ Navbar.jsx
│        ├─ MovieCard.jsx
│        └─ WatchlistButton.jsx
├─ .env.example
├─ package.json
└─ README.md
```

## Requirements

Install these first:

- Node.js
- npm
- A Neon PostgreSQL database

## Environment Variables

Create a `.env` file in the root folder:

```env
PORT=8080
DATABASE_URL="postgresql://USER:PASSWORD@HOST.neon.tech/DBNAME?sslmode=require"
```

Replace the database URL with your Neon connection string.

Do not upload your real `.env` file to GitHub.

## Install Backend Dependencies

From the root project folder:

```bash
npm install
```

## Install Frontend Dependencies

```bash
cd client
npm install
```

## Run Prisma Migration

From the root project folder:

```bash
npx prisma migrate dev --name add_users_table
```

If PowerShell blocks `npx`, use:

```bash
npx.cmd prisma migrate dev --name add_users_table
```

## Run the Backend

From the root project folder:

```bash
npm run dev
```

Backend runs on:

```text
http://localhost:8080
```

Movie API:

```text
http://localhost:8080/api/movies
```

## Run the Frontend

Open a second terminal:

```bash
cd client
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

## API Routes

### Get all movies

```http
GET /api/movies
```

### Get one movie

```http
GET /api/movies/:id
```

### Add movie

```http
POST /api/movies
```

### Update movie status

```http
PATCH /api/movies/:id/status
```

Allowed statuses:

```text
PLANNED
WATCHING
COMPLETED
DROPPED
```

## GitHub Notes

This project should not upload:

```text
node_modules/
client/node_modules/
client/dist/
.env
```

These are ignored using `.gitignore`.

After cloning the project, install dependencies again:

```bash
npm install
cd client
npm install
```

## Tech Stack

- Node.js
- Express
- Prisma
- PostgreSQL
- Neon
- React
- Vite
- Axios
- React Router
```
