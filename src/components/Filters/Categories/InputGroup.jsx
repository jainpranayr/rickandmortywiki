const InputGroup = ({ total, setEpisodeId }) => {
  return (
    <div className='input-group mb-3'>
      <select
        className='form-select'
        onChange={e => setEpisodeId(e.target.value)}
      >
        {[...Array(total).keys()].map(x => {
          return (
            <option key={x} value={x + 1}>
              Episode {x + 1}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default InputGroup
