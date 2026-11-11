import Movies from './Movies.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Read({ movies: localMovies = [] }) {
  // Store movies returned by Express separately from the local app state.
  const [movies, setMovies] = useState([])

  // Fetch server data once when this page first appears.
  useEffect(() => {
    axios
      .get('http://localhost:4000/api/movies')
      .then((response) => {
        // The API wraps its records in a `movies` property.
        setMovies(response.data.movies ?? [])
      })
      .catch((error) => {
        // Keep a useful error in the browser console if the request fails.
        console.error('Unable to load movies:', error)
      })
  }, [])

  // Combine local and server records, using the server copy for duplicate IDs.
  const displayedMovies = [
    ...new Map(
      [...localMovies, ...movies].map((movie) => [movie.imdbID, movie]),
    ).values(),
  ]

  return (
    <main className="container py-4">
      <h3>Hello from the Read component</h3>
      {/* Pass the combined list to the component that renders the movie cards. */}
      <Movies movies={displayedMovies} />
    </main>
  )
}