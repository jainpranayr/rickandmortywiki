import FilterButton from "../FilterButton"

const Status = ({ setStatus, setPageNumber }) => {
  const status = ["Alive", "Dead", "Unknown"]

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button
          className='accordion-button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#collapseOne'
        >
          Status
        </button>
      </h2>
      <div
        id='collapseOne'
        className='accordion-collapse collapse show'
        data-bs-parent='#accordionFilters'
      >
        <div className='accordion-body d-md-flex flex-wrap gap-3'>
          {status.map((elm, idx) => (
            <FilterButton
              filterData={setStatus}
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

export default Status
