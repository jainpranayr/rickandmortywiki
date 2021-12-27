import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"

const Paginate = ({ info, pageNumber, setPageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth)

  const updateWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth)
    return () => window.removeEventListener("resize", updateWindowWidth)
  }, [])

  const handlePageChange = data => {
    setPageNumber(data.selected + 1)
  }

  return (
    <>
      <ReactPaginate
        className='pagination justify-content-center'
        previousLabel='Previous'
        nextLabel='Next'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item prev'
        previousLinkClassName='page-link'
        nextClassName='page-item next'
        nextLinkClassName='page-link'
        breakLabel='...'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        pageCount={info?.pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        activeClassName='active'
        onPageChange={handlePageChange}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      />

      <style>
        {`
          @media(max-width: 768px) {
            .next, .prev {
              display: none
            }
          }
          `}
      </style>
    </>
  )
}

export default Paginate
