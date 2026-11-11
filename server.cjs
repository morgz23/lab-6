const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// Create the Express application and use the port expected by the React app.
const app = express()
const port = 4000

// Allow browser requests from the React development server on another port.
app.use(cors())

// Parse form-encoded and JSON request bodies before route handlers run.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Seed the API with the three movies shown by the lab exercise.
const movies = [
  {
    Title: 'Avengers: Infinity War (server)',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Captain America: Civil War (server)',
    Year: '2016',
    imdbID: 'tt3498820',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg',
  },
  {
    Title: 'World War Z (server)',
    Year: '2013',
    imdbID: 'tt0816711',
    Type: 'movie',
    Poster:
      'https://upload.wikimedia.org/wikipedia/en/d/dc/World_War_Z_poster.jpg',
  },
]

// Return the current movie list as JSON for the React Read page.
app.get('/api/movies', (_request, response) => {
  response.json({ movies })
})

// Accept the lowercase fields sent by the Create form and make an API movie.
app.post('/api/movies', (request, response) => {
  const { title, year, poster } = request.body
  const movie = {
    Title: title,
    Year: String(year),
    imdbID: `movie-${Date.now()}`,
    Type: 'movie',
    Poster: poster || 'https://placehold.co/300x450?text=No+Poster',
  }

  // Keep the new record in memory so later GET requests include it.
  movies.push(movie)
  // 201 means the server successfully created a new resource.
  response.status(201).json({ message: 'Movie added', movie })
})

// Start listening so the React app can call the API at localhost:4000.
app.listen(port, () => {
  console.log(`Movie API listening at http://localhost:${port}`)
})