import { Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"

function EpisodeCard({ title, image, className }) {
  return (
    <Col xs={4} lg={3} className={className}>
      <Card className="bg-dark">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Text className="text-light">{title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default EpisodeCard
