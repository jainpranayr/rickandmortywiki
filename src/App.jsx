import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from "react"

const App = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const { info, results } = fetchedData

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`

  useEffect(() => {
    ;(async function () {
      let data = await fetch(api).then(res => res.json())
      setFetchedData(data)
    })()
  }, [api])

  return (
    <div className='App'>
      <h1 className='text-center my-4 h4 ubuntu'>
        Welcome To Rick & Morty Wiki
      </h1>

      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <div className='col-8'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
