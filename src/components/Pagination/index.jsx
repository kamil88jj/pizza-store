import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
  const pageCount = 3;
  const pageItemsDisplay = 4;
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={pageItemsDisplay}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
