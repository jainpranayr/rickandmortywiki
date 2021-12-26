import FilterButton from "../FilterButton"

const Gender = ({ setGender, setPageNumber }) => {
  const genders = ["female", "male", "genderless", "unknown"]

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseThree'
        >
          Gender
        </button>
      </h2>
      <div
        id='collapseThree'
        className='accordion-collapse collapse'
        data-bs-parent='#accordionFilters'
      >
        <div className='accordion-body d-md-flex flex-wrap gap-3'>
          {genders.map((elm, idx) => (
            <FilterButton
              filterData={setGender}
              setPageNumber={setPageNumber}
              key={idx}
              name='gender'
              idx={idx}
              value={elm}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gender
