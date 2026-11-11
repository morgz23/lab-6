import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Create({ onCreateMovie }) {
  // Keep the current value of each form field in React state.
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [poster, setPoster] = useState('')

  // Get the router function used to move to the Read page after submission.
  const navigate = useNavigate()

  // Handle form submission without reloading the browser page.
  function handleSubmit(event) {
    event.preventDefault()

    // Match the lowercase field names expected by the Express POST route.
    const movie = {
      title: title.trim(),
      year,
      poster: poster.trim(),
    }

    // Log the entered values so the form submission is easy to inspect.
    console.log(`Title: ${movie.title}, Year: ${movie.year}, Poster: ${movie.poster}`)

    // Save the movie first; update the app and navigate only after success.
    axios
      .post('http://localhost:4000/api/movies', movie)
      .then((response) => {
        console.log(response.data)
        // Keep the new record visible immediately in the client-side list.
        onCreateMovie(response.data.movie)
        navigate('/read')
      })
      .catch((error) => {
        // Show server validation details when available, otherwise the request error.
        console.error(error.response?.data ?? error.message)
      })
  }

  return (
    <main className="container py-4">
      <h3>Hello from the Create component</h3>
      {/* Call handleSubmit when the user submits the form. */}
      <form className="mt-4 text-start" onSubmit={handleSubmit}>
        {/* The title input is controlled by the title state value. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="movie-title">
            Add Movie Title
          </label>
          <input
            className="form-control"
            id="movie-title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        {/* The year input is controlled by the year state value. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="movie-year">
            Add Movie Year
          </label>
          <input
            className="form-control"
            id="movie-year"
            type="number"
            min="1888"
            max="2100"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            required
          />
        </div>
        {/* The poster URL is optional; a placeholder is used if it is blank. */}
        <div className="mb-3">
          <label className="form-label" htmlFor="movie-poster">
            Poster URL (optional)
          </label>
          <input
            className="form-control"
            id="movie-poster"
            type="url"
            value={poster}
            onChange={(event) => setPoster(event.target.value)}
          />
        </div>
        {/* Submit the entered movie details. */}
        <button className="btn btn-primary" type="submit">
          Add movie
        </button>
      </form>
    </main>
  )
}