import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchSongs } from "../redux/reducers"
import { Row, Spinner, Alert } from "react-bootstrap"
import NewReleasesCard from "./NewReleasesCard"

const NewReleases = () => {
  const dispatch = useDispatch()
  const { list: songs, loading, error } = useSelector((state) => state.songs)

  useEffect(() => {
    dispatch(fetchSongs())
  }, [dispatch])

  return (
    <>
      <h2 className="text-light mb-4">
        Nuove uscite <i class="bi bi-arrow-right-short"></i>
      </h2>
      {loading && <Spinner animation="border" variant="light" />}
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        {songs.map((song, idx) => (
          <NewReleasesCard
            key={idx}
            title={song.title}
            image={song.album.cover_medium}
            artist={song.artist.name}
          />
        ))}
      </Row>
    </>
  )
}

export default NewReleases
