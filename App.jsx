import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Content from './components/Content.jsx'
import Create from './components/Create.jsx'
import Footer from './components/Footer.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import { initialMovies } from './components/movieData.js'
import Read from './components/Read.jsx'

function App() {
  // Keep movies created in this browser session available across routes.
  const [movies, setMovies] = useState(initialMovies)

  // Add a successfully created movie to the shared client-side list.
  function handleCreateMovie(movie) {
    setMovies((currentMovies) => [movie, ...currentMovies])
  }

  return (
    <>
      {/* Keep the shared navigation visible while the route content changes. */}
      <NavigationBar />

      {/* Render the component that matches the current browser URL. */}
      <Routes>
        {/* The landing page demonstrates the greeting and current time. */}
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read movies={movies} />} />
        <Route
          path="/create"
          element={<Create onCreateMovie={handleCreateMovie} />}
        />
      </Routes>

      {/* Show the shared footer beneath whichever route is active. */}
      <Footer />
    </>
  )
}

export default App