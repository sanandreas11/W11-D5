import { Col } from "react-bootstrap"
import Card from "react-bootstrap/Card"

function NewsCard(props) {
  return (
    <Col xs={6}>
      <Card className="d-flex flex-grow-0" bg="dark">
        <Card.Body>
          <Card.Title className="text-black-50 fs-6">
            NUOVA STAZIONE RADIO
          </Card.Title>
          <Card.Text className="text-light d-flex flex-grow-1">
            {props.text}
          </Card.Text>
          <Card.Img
            className="d-flex flex-grow-0"
            variant="bottom"
            src={props.image}
          />
        </Card.Body>
      </Card>
    </Col>
  )
}

export default NewsCard
