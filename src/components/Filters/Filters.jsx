import Status from "./Categories/Status"
import Species from "./Categories/Species"
import Gender from "./Categories/Gender"

const Filters = ({ setStatus, setGender, setSpecies, setPageNumber }) => {
  const handleClearFilters = () => {
    setPageNumber("")
    setStatus("")
    setSpecies("")
    setGender("")
    window.location.reload(false)
  }

  return (
    <div className='col-lg-3 col-12 mb-4'>
      <div className='text-center fw-bold fs-4 mb-2'>Filters</div>
      <div
        role='button'
        className='text-center text-primary text-decoration-underline mb-4'
        onClick={handleClearFilters}
      >
        Clear Filters
      </div>
      <div className='accordion' id='accordionFilters'>
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  )
}

export default Filters
