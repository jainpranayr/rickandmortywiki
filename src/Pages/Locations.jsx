import { useEffect, useState } from "react"
import Cards from "../components/Cards"
import InputGroup from "../components/Filters/Categories/InputGroup"

const Locations = () => {
  const [locationId, setLocationId] = useState(1)
  const [locationDetails, setLocationDetails] = useState([])
  const { id, name, type } = locationDetails
  const [results, setResults] = useState([])
  const API_URl = `https://rickandmortyapi.com/api/location/${locationId}`

  useEffect(() => {
    ;(async function () {
      const data = await fetch(API_URl).then(res => res.json())
      setLocationDetails(data)

      let characters = await Promise.all(
        data.residents.map(c => {
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
          Location {id} :{" "}
          <span className='text-primary'>
            {name ? name[0].toUpperCase() + name.slice(1) : "Unknown"}
          </span>
        </p>
        <p className='text-center'>Type: {type}</p>
      </div>
      <div className='row'>
        <div className='col-lg-3 col-12'>
          <p className='text-center mb-4 h5'>Pick Location</p>
          <InputGroup setId={setLocationId} total={126} name='Location' />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>
            <Cards page='/locations/' results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Locations
