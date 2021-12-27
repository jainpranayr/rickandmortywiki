const Cards = ({ results }) => {
  const truncate = (str, truncateLength) => {
    return str.length <= truncateLength
      ? str
      : str.slice(0, truncateLength) + "..."
  }

  const badgeBg = st => {
    return st === "Alive" ? "success" : st === "Dead" ? "danger" : "secondary"
  }

  return (
    <>
      {results
        ? results.map(({ id, name, image, location, status }) => {
            return (
              <div className='col-4 mb-3 position-relative' key={id}>
                <div className='border border-2 border-primary rounded overflow-hidden'>
                  <img src={image} alt={name} className='img-fluid' />
                  <div className='p-2'>
                    <div className='fs-5 fw-bold mb-3'>
                      {truncate(name, 14)}
                    </div>
                    <div className='tiny fw-light'>Last location</div>
                    <div className='fs-6'>{truncate(location.name, 16)}</div>
                  </div>
                </div>
                <div
                  className={`badge bg-${badgeBg(status)} position-absolute`}
                >
                  {status}
                </div>
              </div>
            )
          })
        : "No characters Found :/"}
    </>
  )
}

export default Cards
