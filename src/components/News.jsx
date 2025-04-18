import NewsCard from "./NewsCard"
import { Row } from "react-bootstrap"

function News() {
  return (
    <>
      <div className="text-light">
        <h1 className="mt-4 mx-2 border-bottom border-dark">Novità</h1>
      </div>
      <Row>
        <NewsCard
          text="Rilassati,al resto pensiamo noi. Ascolta Apple Music Chill"
          image="/assets/images/1a.png"
        />
        <NewsCard
          text="Ecco la nuova casa della musica latina"
          image="/assets/images/1b.png"
        />
      </Row>
    </>
  )
}

export default News
