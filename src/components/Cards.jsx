import { Link } from "react-router-dom"

const truncate = (str, truncateLength) => {
  return str.length <= truncateLength
    ? str
    : str.slice(0, truncateLength) + "..."
}

export const badgeBg = st => {
  return st === "Alive" ? "success" : st === "Dead" ? "danger" : "secondary"
}

const Cards = ({ results, page }) => {
  return (
    <>
      {results
        ? results.map(({ id, name, image, location, status }) => {
            return (
              <Link
                to={`${page}${id}`}
                className='col-lg-4 col-md-6 col-12 mb-3 position-relative text-dark text-decoration-none'
                key={id}
              >
                <div className='border border-2 border-primary rounded overflow-hidden d-flex justify-content-center flex-column'>
                  <img src={image} alt={name} className='img-fluid' />
                  <div className='p-2'>
                    <div className='fs-5 fw-bold mb-2'>
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
              </Link>
            )
          })
        : "No characters Found :/"}
    </>
  )
}

export default Cards
