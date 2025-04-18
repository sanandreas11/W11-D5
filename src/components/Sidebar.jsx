import { Nav } from "react-bootstrap"
import { HouseDoorFill, MusicNoteList, Broadcast } from "react-bootstrap-icons"
import "../css/sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar d-none d-md-block bg-dark text-light p-3">
      <img className="mb-3" src="../public/assets/logos/music.svg" alt="" />
      <input
        type="text"
        className="form-control bg-dark text-light mb-4"
        placeholder="Cerca"
      />
      <Nav className="flex-column gap-2">
        <Nav.Link
          className="text-light d-flex align-items-center gap-2"
          href="#"
        >
          <HouseDoorFill /> Home
        </Nav.Link>
        <Nav.Link
          className="text-light d-flex align-items-center gap-2"
          href="#"
        >
          <MusicNoteList /> Novità
        </Nav.Link>
        <Nav.Link
          className="text-light d-flex align-items-center gap-2"
          href="#"
        >
          <Broadcast /> Radio
        </Nav.Link>
      </Nav>
    </div>
  )
}

export default Sidebar
