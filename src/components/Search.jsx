const Search = ({ setSearchCharacter, setPageNumber }) => {
  return (
    <div className='mx-auto mb-4 shadow-sm search'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Search for characters'
          onChange={e => {
            setPageNumber(1)
            setSearchCharacter(e.target.value)
          }}
        />
        <div className='input-group-append'>
          <button
            className='btn btn-primary'
            type='button'
            onClick={e => e.preventDefault()}
          >
            <i className='fa fa-search'></i>
          </button>
        </div>
      </div>

      <style>
        {`
          .search {
            width: 50%
          }
          
          @media (max-width: 576px) {
            .search {
              width:  80%
            }
          }
          `}
      </style>
    </div>
  )
}

export default Search
