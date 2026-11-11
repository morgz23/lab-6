import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'

// Receive one movie object and render its details.
export default function MovieItem({ mymovie }) {
  // Run after render, and again if this movie prop changes.
  useEffect(() => {
    console.log('Movie Item:', mymovie)
  }, [mymovie])

  return (
    <div className="col">
      <Card className="h-100">
        <Card.Header>{mymovie.Title}</Card.Header>
        <Card.Body>
          {/* Keep the poster inside the card body with descriptive alt text. */}
          <Card.Img src={mymovie.Poster} alt={`${mymovie.Title} poster`} />
        </Card.Body>
        <Card.Footer>{mymovie.Year}</Card.Footer>
      </Card>
    </div>
  )
}