const InputGroup = ({ total, name, setId }) => {
  return (
    <div className='input-group mb-3'>
      <select
        className='form-select'
        onChange={e => setId(e.target.value)}
        id={name}
      >
        {[...Array(total).keys()].map(x => {
          return (
            <option key={x} value={x + 1}>
              {name} {x + 1}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default InputGroup
