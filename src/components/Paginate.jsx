import ReactPaginate from "react-paginate"

const Paginate = ({ info, pageNumber, setPageNumber }) => {
  const handlePageChange = data => {
    setPageNumber(data.selected + 1)
  }
  return (
    <ReactPaginate
      className='pagination justify-content-center'
      previousLabel='Previous'
      nextLabel='Next'
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakLabel='...'
      breakClassName='page-item'
      breakLinkClassName='page-link'
      pageCount={info?.pages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      activeClassName='active'
      onPageChange={handlePageChange}
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
    />
  )
}

export default Paginate
