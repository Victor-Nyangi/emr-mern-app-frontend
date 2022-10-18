import React from 'react'
import { usePagination, DOTS } from './usePagination';
 
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <>
     <div className="my-4">
        <ol className="flex justify-center space-x-1 text-xs font-medium">
        <li
              className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full ${currentPage === lastPage} && pointer-events-none`}
              onClick={onPrevious}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
          </li>
          <li
              className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded-full"
            >
              {" "}
              1{" "}

          </li>
          <li className="block w-8 h-8 leading-8 text-center text-white bg-blue-600 border-blue-600 rounded-full">
            2
          </li>

 {/* {
    pageNumbers.map(number => (
      <li key={number} onClick={() => onChange(number)}
        className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded-full"
      >
        {" "}
        {number}{" "}

    </li>
    ))
 } */}
 {paginationRange.map(pageNumber => {
    if (pageNumber === DOTS) {
      return <li className="block w-8 h-8 leading-8 text-center text-white bg-blue-600 border-blue-600 rounded-full">&#8230;</li>;
    }

    return (
      <li
      className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full ${pageNumber === currentPage} && pointer-events-none`}
        onClick={() => onPageChange(pageNumber)}
      >
        {pageNumber}
      </li>
    );
  })}
          <li
              className={`inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded-full ${currentPage === lastPage} && pointer-events-none`}
              onClick={onNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
          </li>
        </ol>
      </div>
    </>
  )
}

export default Pagination