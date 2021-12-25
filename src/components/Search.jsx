const Search = ({ setSearchCharacter, setPageNumber }) => {
  return (
    <div className='mx-auto w-50 mb-4 shadow-sm'>
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
    </div>
  )
}

export default Search
