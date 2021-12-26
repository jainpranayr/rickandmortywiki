const FilterButton = ({ name, idx, value, filterData, setPageNumber }) => {
  return (
    <div className='form-check'>
      <style>
        {`
          .filter-btn:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <input
        className='form-check-input filter-btn'
        type='radio'
        name={name}
        id={`${name}-${idx}`}
        onClick={() => {
          setPageNumber(1)
          filterData(value)
        }}
      />
      <label
        htmlFor={`${name}-${idx}`}
        className='form-check-label btn btn-outline-primary'
      >
        {value}
      </label>
    </div>
  )
}

export default FilterButton
