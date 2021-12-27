import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import InputGroup from "../components/Filters/Categories/InputGroup"

const Episodes = () => {
  const [episodeId, setEpisodeId] = useState(1)
  const [episodeDetails, setEpisodeDetails] = useState([])
  const { episode, air_date, name } = episodeDetails
  const [results, setResults] = useState([])
  const API_URl = `https://rickandmortyapi.com/api/episode/${episodeId}`

  useEffect(() => {
    ;(async function () {
      const data = await fetch(API_URl).then(res => res.json())
      setEpisodeDetails(data)

      let characters = await Promise.all(
        data.characters.map(c => {
          return fetch(c).then(res => res.json())
        })
      )
      setResults(characters)
    })()
  }, [API_URl])

  return (
    <div className='container'>
      <div className='row'>
        <p className='text-center h3 mb-0'>
          {episode}:{" "}
          <span className='text-primary'>
            {name ? name[0].toUpperCase() + name.slice(1) : "Unknown"}
          </span>
        </p>
        <p className='text-center'>Air Date : {air_date}</p>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <p className='text-center mb-2 h5'>Pick Episode</p>
          <InputGroup setId={setEpisodeId} total={51} name='Episode' />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards page='/episodes/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes
