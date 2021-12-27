import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { badgeBg } from "../components/Cards"

const CharacterDetails = () => {
  const { id } = useParams()
  const [fetchedData, setFetchedData] = useState([])
  const {
    name,
    image,
    type,
    origin,
    location,
    species,
    status,
    gender,
    episode,
  } = fetchedData

  const API_URL = `https://rickandmortyapi.com/api/character/${id}`
  useEffect(() => {
    ;(async function () {
      let data = await fetch(API_URL).then(res => res.json())
      setFetchedData(data)
    })()
  }, [API_URL])

  return (
    <div className='container d-flex justify-content-center'>
      <div className='d-flex flex-column gap-2'>
        <h1 className='text-center'>{name}</h1>
        <img src={image} alt={name} className='img-fluid' />
        <div className={`badge bg-${badgeBg(status)} fs-5`}>{status}</div>
        <div className='content'>
          <div>
            <p className='mb-0'>
              <span className='fw-bold'>Gender: </span>
              {gender}
            </p>
            <p className='mb-0'>
              <span className='fw-bold'>Species: </span>
              {species}
            </p>
            {type && (
              <p className='mb-0'>
                <span className='fw-bold'>Type: </span>
                {type}
              </p>
            )}
            <p className='mb-0'>
              <span className='fw-bold'>Origin: </span>
              {origin?.name}
            </p>
            <p className='mb-0'>
              <span className='fw-bold'>Last Location: </span>
              {location?.name}
            </p>
            <p className='mb-0'>
              <span className='fw-bold'>No. Of Episodes: </span>
              {episode?.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterDetails
