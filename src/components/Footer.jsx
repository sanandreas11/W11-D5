import Nav from "react-bootstrap/Nav"
const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <>
      <Nav>
        <Nav.Item>
          <Nav.Link active className="text-light border-end border-dark">
            Italia
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="text-light" eventKey="link-1">
            English &#40;UK&#41;
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-light ms-3">Copyright &#169; {currentYear}</p>
      <ul className="d-flex flex-wrap list-unstyled">
        <li className="text-light border-end border-dark mx-1 px-2">
          Condizioni dei servizi internet
        </li>
        <li className="text-light border-end border-dark mx-1 px-2">
          Apple Music e privacy
        </li>
        <li className="text-light border-end border-dark mx-1 px-2">
          Avviso sui cookie
        </li>
        <li className="text-light border-end border-dark mx-1 px-2">
          Supporto
        </li>
        <li className="text-light">Feedback</li>
      </ul>
    </>
  )
}

export default Footer
