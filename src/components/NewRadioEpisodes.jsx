import { Row } from "react-bootstrap"
import EpisodeCard from "./EpisodeCard"

const NewRadioEpisodes = () => {
  return (
    <>
      <h2 className="text-light mt-3">
        Nuovi episodi radio <i className="bi bi-arrow-right-short"></i>
      </h2>
      <Row>
        <EpisodeCard title="Pròlogo con Abuelo" image="/assets/images/2a.png" />
        <EpisodeCard title="The Wanderer" image="/assets/images/2b.png" />
        <EpisodeCard
          title="Michael Bublè & Carly Pearce"
          image="/assets/images/2c.png"
        />
        <EpisodeCard
          title="Stephan Moccio: The Zane Lowe Interview"
          image="/assets/images/2d.png"
          className="d-none d-lg-block"
        />
      </Row>
    </>
  )
}
export default NewRadioEpisodes
