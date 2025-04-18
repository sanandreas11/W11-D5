import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./App.css"
import MyNavMobile from "./components/MyNavMobile"
import News from "./components/News"
import { Container } from "react-bootstrap"
import NewRadioEpisodes from "./components/NewRadioEpisodes"
import NewReleases from "./components/NewReleases"
import Other from "./components/other"
import Footer from "./components/Footer"
import MobilePlayer from "./components/MobilePlayer"

function App() {
  return (
    <>
      <MyNavMobile />
      <Container>
        <News />
      </Container>
      <Container>
        <NewRadioEpisodes />
      </Container>
      <Container>
        <NewReleases />
      </Container>
      <Container>
        <Other />
      </Container>
      <Footer />
      <MobilePlayer />
    </>
  )
}

export default App
