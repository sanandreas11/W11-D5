import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

function MyNavMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (!isMobile) return null // Don't render if not mobile

  return (
    <Navbar expand="lg" className="bg-dark d-flex justify-content-between">
      <Container>
        <Navbar.Brand className="d-flex order-1" href="#home">
          <img src="/assets/logos/music.svg" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="d-flex order-0"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Novità</Nav.Link>
            <Nav.Link href="#">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="d-flex order-2 fw-bold text-danger">
          Accedi
        </Nav.Link>
      </Container>
    </Navbar>
  )
}

export default MyNavMobile
