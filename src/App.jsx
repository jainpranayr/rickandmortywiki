import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from "./components/Cards"
import Filters from "./components/Filters/Filters"
import Navbar from "./components/Navbar"
import Paginate from "./components/Paginate"
import Search from "./components/Search"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Episodes from "./Pages/Episodes"
import Locations from "./Pages/Locations"
import { useEffect, useState } from "react"

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [fetchedData, setFetchedData] = useState([])
  const { info, results } = fetchedData
  const [searchCharacter, setSearchCharacter] = useState("")
  const [status, setStatus] = useState("")
  const [species, setSpecies] = useState("")
  const [gender, setGender] = useState("")

  const API_URL = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchCharacter}&status=${status}&gender=${gender}&species=${species}`

  useEffect(() => {
    ;(async function () {
      let data = await fetch(API_URL).then(res => res.json())
      setFetchedData(data)
    })()
  }, [API_URL])

  return (
    <div>
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
