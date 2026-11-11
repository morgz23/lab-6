import MovieItem from './MovieItem.jsx'

// Receive the movie array from the parent component as a prop.
export default function Movies({ movies }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 mt-1">
      {/* Map each movie to a MovieItem and use its ID as a stable React key. */}
      {movies.map((movie) => (
        <MovieItem key={movie.imdbID} mymovie={movie} />
      ))}
    </div>
  )
}