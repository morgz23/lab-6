import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

export default function NavigationBar() {
  // Combine Bootstrap's navigation components with React Router's client-side links.
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Morgan's App
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* NavLink changes the route without reloading the application. */}
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/read">
            Read
          </Nav.Link>
          <Nav.Link as={NavLink} to="/create">
            Create
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}