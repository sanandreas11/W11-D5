import { Card, Button } from "react-bootstrap"
import { Play, SkipForward } from "react-bootstrap-icons"
import "../css/MobilePlayer.css"

const MobilePlayer = () => {
  return (
    <Card className="bottom-player d-flex d-lg-none bg-dark text-light flex-row align-items-center p-2 shadow-lg">
      <img
        src="https://placecats.com/100/100"
        alt="cover"
        width={40}
        height={40}
        className="me-3 rounded"
      />
      <div className="flex-grow-1">
        <small>Song Title</small>
        <br />
        <small className="text-muted">Artist Name</small>
      </div>
      <Button variant="link" className="text-light">
        <Play size={20} />
      </Button>
      <Button variant="link" className="text-light">
        <SkipForward size={20} />
      </Button>
    </Card>
  )
}

export default MobilePlayer
