import FilterButton from "../FilterButton"

const Species = ({ setSpecies, setPageNumber }) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
  ]

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseTwo'
        >
          Species
        </button>
      </h2>
      <div
        id='collapseTwo'
        className='accordion-collapse collapse'
        data-bs-parent='#accordionFilters'
      >
        <div className='accordion-body d-flex flex-wrap gap-3'>
          {species.map((elm, idx) => (
            <FilterButton
              filterData={setSpecies}
              setPageNumber={setPageNumber}
              key={idx}
              name='status'
              idx={idx}
              value={elm}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Species
