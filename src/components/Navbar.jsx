import { NavLink, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light mb-2'>
      <div className='container'>
        <Link to='/' className='navbar-brand  fw-bold ubuntu'>
          Rick & Morty <span className='text-primary'>Wiki</span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav fw-bold'>
            <NavLink
              activeClassName='active'
              to='/episodes'
              className='nav-link'
            >
              Episodes
            </NavLink>
            <NavLink to='/locations' className='nav-link'>
              Locations
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
