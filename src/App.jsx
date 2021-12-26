import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import { useEffect, useState } from "react"
import Cards from "./components/Cards"
import Filters from "./components/Filters/Filters"
import Paginate from "./components/Paginate"
import Search from "./components/Search"

const App = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const { info, results } = fetchedData
  const [searchCharacter, setSearchCharacter] = useState("")
  const [status, setStatus] = useState("")
  const [species, setSpecies] = useState("")
  const [gender, setGender] = useState("")

  const api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchCharacter}&status=${status}&gender=${gender}&species=${species}`

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

      <Search
        setSearchCharacter={setSearchCharacter}
        setPageNumber={setPageNumber}
      />

      <div className='container'>
        <div className='row'>
          <Filters
            setStatus={setStatus}
            setSpecies={setSpecies}
            setGender={setGender}
            setPageNumber={setPageNumber}
          />
          <div className='col-8'>
            <div className='row'>
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Paginate
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  )
}

export default App
