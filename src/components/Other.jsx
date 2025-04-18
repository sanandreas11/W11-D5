import { Button, Col, Row } from "react-bootstrap"

const Other = () => {
  return (
    <Row>
      <h2 className="text-light">Altro da esplorare</h2>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Esplora per genere</p>{" "}
          <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Decenni</p> <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Attività e stati d'animo</p>{" "}
          <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Worldwide</p> <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Classifiche</p> <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Audio spaziale</p>{" "}
          <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Video musicali</p>{" "}
          <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Nuovi artisti</p>{" "}
          <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
      <Col xs={12} lg={4}>
        <Button
          className="text-danger d-flex justify-content-between my-2 w-100 align-items-center"
          variant="dark"
        >
          <p>Hit del passato</p>{" "}
          <i class="bi bi-arrow-right-short text-danger"></i>
        </Button>
      </Col>
    </Row>
  )
}

export default Other
