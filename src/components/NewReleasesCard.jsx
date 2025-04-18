import { Card, Col, Button } from "react-bootstrap"

const NewReleasesCard = ({ title, image, artist }) => {
  return (
    <Col xs={4} md={4} lg={2} className="mb-3">
      <Card bg="dark" text="light" className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="fs-6 mb-2">{title}</Card.Title>
          <Card.Text className="text-secondary mb-3">{artist}</Card.Text>
          <Button
            variant="outline-light"
            size="sm"
            className="mt-auto align-self-start"
          >
            ▶ Ascolta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default NewReleasesCard
