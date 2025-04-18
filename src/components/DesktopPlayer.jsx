import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap"

const DesktopPlayer = () => {
  return (
    <div className="bg-dark py-2 px-3 d-none d-lg-block border-bottom border-secondary">
      <Container fluid>
        <Row className="align-items-center">
          {/* Media Controls */}
          <Col
            lg={3}
            className="d-flex justify-content-start align-items-center gap-3"
          >
            <i class="bi bi-shuffle text-light fs-5"></i>
            <i className="bi bi-skip-start-fill text-light fs-5"></i>
            <i class="bi bi-play-fill text-light fs-5"></i>
            <i className="bi bi-skip-end-fill text-light fs-5"></i>
            <i class="bi bi-repeat text-light fs-5"></i>
          </Col>

          {/* Center Apple Logo */}
          <Col lg={6} className="text-center">
            <i className="bi bi-apple text-light fs-4"></i>
          </Col>

          {/* Volume + Sign In */}
          <Col
            lg={3}
            className="d-flex justify-content-end align-items-center gap-3"
          >
            <i className="bi bi-volume-up text-light"></i>
            <div style={{ width: "100px" }}>
              <ProgressBar now={60} variant="danger" />
            </div>
            <Button variant="danger" size="sm">
              <i class="bi bi-person-fill text-light me-1"></i>
              Accedi
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DesktopPlayer
